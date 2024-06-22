import nodemailer from "nodemailer";

// export async function POST(req) {
// //   if (req.method !== 'POST') {
// //     return res.status(405).json({ message: 'Only POST requests allowed' });
// //   }

//   const { email, uname, message } = req.body;

//   if (!email || !message) {
//     return res.status(400).json({ message: 'Email and message are required' });
//   }

//   // Create a transporter
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.zoho.com',
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: 'enquiries@remoteraters.com', // your Zoho email address
//       pass: 'Pass@4321', // your email password or an app-specific password
//     },
//   });

//   try {
//     // Send mail
//     await transporter.sendMail({
//       from: email, // sender address
//       to: 'Enquiries@remoteraters.com', // list of receivers
//       subject: `New Contact Us Message from ${uname}`, // Subject line
//       text: `Email: ${email}\nMessage: ${message}`, // plain text body
//       replyTo: email, // reply-to address
//       html: `<p>Email: ${email}</p><p>Message: ${message}</p>`, // html body
//     });

//     return res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

import { NextResponse } from "next/server";

// Function to generate a random alphanumeric code

export async function POST(req) {
  try {
    const data = await req.json();
    const { email, uname, message } = data;
    // Assuming req is a Request object

    //  Create a transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "admin@remoteraters.com", // your Zoho email address
        pass: process.env.EMAIL_PASS, // your email password or an app-specific password
      },
    });

    // Send mail
    await transporter.sendMail({
      from: 'admin@remoteraters.com', // sender address
      to: "enquiries@remoteraters.com", // list of receivers
      subject: `New Contact Us Message from ${uname}`, // Subject line
      text: `Email: ${email}\nMessage: ${message}`, // plain text body
      replyTo: email, // reply-to address
      html: `<p>Email: ${email}</p><p>Message: ${message}</p>`, // html body
    });

    // Log the received data with ID and code
    // console.log("Received data with ID and code:", data);

    
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);

    // Return a JSON response indicating an error
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
