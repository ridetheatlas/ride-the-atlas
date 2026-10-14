import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "ridetheatlas@gmail.com";
const FROM_EMAIL = "Ride The Atlas <enquiries@ridetheatlas.com>";

const allowedActivities = [
    "Mountain biking",
    "Ski touring",
    "Both biking and skiing",
    "Other",
];

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return entities[character];
    });
}

export async function POST(request: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not configured.");

            return NextResponse.json(
                { error: "Email service is not configured." },
                { status: 500 }
            );
        }

        const data = await request.json();

        const name =
            typeof data.name === "string" ? data.name.trim() : "";
        const email =
            typeof data.email === "string" ? data.email.trim() : "";
        const country =
            typeof data.country === "string" ? data.country.trim() : "";
        const activity =
            typeof data.activity === "string" ? data.activity : "";
        const dates =
            typeof data.dates === "string" ? data.dates.trim() : "";
        const groupSize =
            typeof data.groupSize === "string"
                ? data.groupSize.trim()
                : "";
        const message =
            typeof data.message === "string" ? data.message.trim() : "";

        if (
            !name ||
            !email ||
            !activity ||
            !message ||
            name.length > 120 ||
            email.length > 254 ||
            country.length > 100 ||
            dates.length > 150 ||
            groupSize.length > 50 ||
            message.length > 5000
        ) {
            return NextResponse.json(
                { error: "Please check your details and try again." },
                { status: 400 }
            );
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        if (!allowedActivities.includes(activity)) {
            return NextResponse.json(
                { error: "Please select a valid activity." },
                { status: 400 }
            );
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeCountry = escapeHtml(country || "Not specified");
        const safeActivity = escapeHtml(activity);
        const safeDates = escapeHtml(dates || "Flexible");
        const safeGroupSize = escapeHtml(
            groupSize || "Not specified"
        );
        const safeMessage = escapeHtml(message).replace(
            /\r?\n/g,
            "<br>"
        );

        const subject = `New enquiry | ${activity} | ${name}`;

        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Ride The Atlas enquiry</title>
</head>

<body style="margin:0;padding:0;background-color:#F3EBDD;font-family:Arial,Helvetica,sans-serif;color:#292D28;">

    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
        New ${safeActivity.toLowerCase()} enquiry from ${safeName}.
    </div>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#F3EBDD;">
        <tr>
            <td align="center" style="padding:32px 14px;">

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;">

                    <!-- HEADER -->
                    <tr>
                        <td style="padding:26px 28px;background-color:#292D28;">
                            <p style="margin:0;color:#FFFFFF;font-size:20px;font-weight:700;letter-spacing:2px;">
                                RIDE <span style="color:#E56A2E;">THE</span> ATLAS
                            </p>

                            <p style="margin:9px 0 0;color:#D8D8D0;font-size:10px;letter-spacing:2px;text-transform:uppercase;">
                                Morocco · Mountain adventures
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="height:4px;background-color:#E56A2E;font-size:0;line-height:0;">
                            &nbsp;
                        </td>
                    </tr>

                    <!-- INTRODUCTION -->
                    <tr>
                        <td style="padding:34px 28px 26px;background-color:#FFFFFF;">

                            <p style="margin:0 0 12px;color:#E56A2E;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">
                                Website contact form
                            </p>

                            <h1 style="margin:0 0 14px;color:#292D28;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:400;line-height:1.2;">
                                A new adventure begins.
                            </h1>

                            <p style="margin:0;color:#62645D;font-size:14px;line-height:1.8;">
                                You have received a new enquiry through the Ride The Atlas website. The details are below.
                            </p>

                        </td>
                    </tr>

                    <!-- CONTACT DETAILS -->
                    <tr>
                        <td style="padding:0 28px 28px;background-color:#FFFFFF;">

                            <p style="margin:0 0 16px;padding-bottom:12px;border-bottom:1px solid #E9E5DC;color:#E56A2E;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">
                                Contact details
                            </p>

                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">

                                <tr>
                                    <td width="38%" style="padding:10px 8px 10px 0;border-bottom:1px solid #F0EDE6;color:#77786F;font-size:12px;">
                                        Name
                                    </td>
                                    <td style="padding:10px 0;border-bottom:1px solid #F0EDE6;color:#292D28;font-size:13px;font-weight:700;">
                                        ${safeName}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:10px 8px 10px 0;border-bottom:1px solid #F0EDE6;color:#77786F;font-size:12px;">
                                        Email
                                    </td>
                                    <td style="padding:10px 0;border-bottom:1px solid #F0EDE6;font-size:13px;overflow-wrap:anywhere;">
                                        <a href="mailto:${safeEmail}" style="color:#292D28;text-decoration:underline;">
                                            ${safeEmail}
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:10px 8px 10px 0;border-bottom:1px solid #F0EDE6;color:#77786F;font-size:12px;">
                                        Country
                                    </td>
                                    <td style="padding:10px 0;border-bottom:1px solid #F0EDE6;color:#292D28;font-size:13px;">
                                        ${safeCountry}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:10px 8px 10px 0;border-bottom:1px solid #F0EDE6;color:#77786F;font-size:12px;">
                                        Activity
                                    </td>
                                    <td style="padding:10px 0;border-bottom:1px solid #F0EDE6;color:#292D28;font-size:13px;font-weight:700;">
                                        ${safeActivity}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:10px 8px 10px 0;border-bottom:1px solid #F0EDE6;color:#77786F;font-size:12px;">
                                        Preferred dates
                                    </td>
                                    <td style="padding:10px 0;border-bottom:1px solid #F0EDE6;color:#292D28;font-size:13px;">
                                        ${safeDates}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:10px 8px 10px 0;color:#77786F;font-size:12px;">
                                        Group size
                                    </td>
                                    <td style="padding:10px 0;color:#292D28;font-size:13px;">
                                        ${safeGroupSize}
                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>

                    <!-- MESSAGE -->
                    <tr>
                        <td style="padding:0 28px 30px;background-color:#FFFFFF;">

                            <p style="margin:0 0 16px;padding-bottom:12px;border-bottom:1px solid #E9E5DC;color:#E56A2E;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">
                                Their message
                            </p>

                            <div style="padding:18px;background-color:#F8F6F0;border-left:3px solid #E56A2E;color:#3C3E37;font-size:14px;line-height:1.9;overflow-wrap:anywhere;">
                                ${safeMessage}
                            </div>

                            <p style="margin:22px 0 0;font-size:13px;line-height:1.7;">
                                <a href="mailto:${safeEmail}" style="display:inline-block;padding:13px 18px;background-color:#E56A2E;color:#FFFFFF;font-size:10px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase;">
                                    Reply to this enquiry &rarr;
                                </a>
                            </p>

                        </td>
                    </tr>

                    <!-- FOOTER -->
                    <tr>
                        <td style="padding:23px 28px;background-color:#292D28;">

                            <p style="margin:0 0 7px;color:#FFFFFF;font-size:12px;font-weight:700;letter-spacing:1.5px;">
                                RIDE <span style="color:#E56A2E;">THE</span> ATLAS
                            </p>

                            <p style="margin:0;color:#D8D8D0;font-size:11px;line-height:1.8;">
                                Mountain biking &amp; ski touring in Morocco.<br>
                                A new perspective on the Atlas Mountains.
                            </p>

                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>`;

        const text = [
            "RIDE THE ATLAS — NEW WEBSITE ENQUIRY",
            "====================================",
            "",
            "CONTACT DETAILS",
            `Name: ${name}`,
            `Email: ${email}`,
            `Country: ${country || "Not specified"}`,
            `Activity: ${activity}`,
            `Preferred dates: ${dates || "Flexible"}`,
            `Group size: ${groupSize || "Not specified"}`,
            "",
            "MESSAGE",
            message,
            "",
            "Reply directly to this email to respond to the enquiry.",
            "Ride The Atlas | Mountain biking & ski touring in Morocco",
        ].join("\n");

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [CONTACT_EMAIL],
            replyTo: email,
            subject,
            html,
            text,
        });

        if (error) {
            console.error("Resend delivery error:", error);

            return NextResponse.json(
                {
                    error: "We couldn't send your enquiry. Please try again.",
                },
                { status: 502 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Your enquiry has been sent.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}