import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  propertyAddress: string;
  appraisalType: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    const emailBody = `
New Contact Form Submission from Eagle Home Appraisal Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLIENT INFORMATION:

Name:               ${formData.name}
Email:              ${formData.email}
Phone:              ${formData.phone}
Property Address:   ${formData.propertyAddress}
Appraisal Type:     ${formData.appraisalType}

MESSAGE:
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST
    `;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
    .value { background: white; padding: 12px; border-radius: 5px; border: 1px solid #cbd5e1; }
    .message-box { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #d97706; margin-top: 20px; }
    .footer { background: #1e3a8a; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🏡 New Appraisal Request</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Eagle Home Appraisal - West Palm Beach</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Client Name:</div>
        <div class="value">${formData.name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address:</div>
        <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone Number:</div>
        <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Property Address:</div>
        <div class="value">${formData.propertyAddress}</div>
      </div>
      <div class="field">
        <div class="label">Appraisal Type:</div>
        <div class="value">${formData.appraisalType}</div>
      </div>
      <div class="message-box">
        <div class="label" style="margin-bottom: 10px;">Additional Information:</div>
        <div style="white-space: pre-wrap;">${formData.message}</div>
      </div>
      <p style="margin-top: 20px; color: #64748b; font-size: 14px;">
        <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST
      </p>
    </div>
    <div class="footer">
      Eagle Home Appraisal | West Palm Beach, FL<br>
      This is an automated notification from your website contact form.
    </div>
  </div>
</body>
</html>
    `;

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not configured');
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Eagle Home Appraisal <noreply@eaglehomeappraisalwestpalmbeach.com>',
        to: ['marlene@eaglehomeappraisal.com'],
        subject: `New Appraisal Request - ${formData.appraisalType}`,
        text: emailBody,
        html: emailHtml,
        reply_to: formData.email,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      throw new Error(`Resend API error: ${errorText}`);
    }

    const emailResult = await emailResponse.json();

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully',
        emailId: emailResult.id 
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});