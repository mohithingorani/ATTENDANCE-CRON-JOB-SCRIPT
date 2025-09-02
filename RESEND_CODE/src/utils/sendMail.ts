import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY!);

async function sendMail(attendance: any[]) {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "mohithingorani2003@gmail.com",
    subject: "Your daily attendance",
    html: `<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Course ID</th>
      <th>Course Name</th>
      <th>Present</th>
      <th>Absent</th>
      <th>Total</th>
      <th>Percentage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AI4101</td>
      <td>DEEP LEARNING</td>
      <td> ${attendance[0].Present} </td>
      <td>${attendance[0].Absent} </td>
      <td>${attendance[0].Total} </td>
      <td>${attendance[0].Percentage}% </td>
    </tr>
    <tr>
      <td>AI4102</td>
      <td>TEXT MINING</td>
          <td> ${attendance[1].Present} </td>
      <td>${attendance[1].Absent} </td>
      <td>${attendance[1].Total} </td>
      <td>${attendance[1].Percentage}% </td>
    </tr>
    <tr>
      <td>AI4103</td>
      <td>RECOMMENDER SYSTEMS</td>
     <td> ${attendance[2].Present} </td>
      <td>${attendance[2].Absent} </td>
      <td>${attendance[2].Total} </td>
      <td>${attendance[2].Percentage}% </td>
    </tr>
    <tr>
      <td>AI4143</td>
      <td>ARTIFICIAL INTELLIGENCE IN HEALTHCARE</td>
     <td> ${attendance[3].Present} </td>
      <td>${attendance[3].Absent} </td>
      <td>${attendance[3].Total} </td>
      <td>${attendance[3].Percentage}% </td>
    </tr>
    <tr>
      <td>AI4145</td>
      <td>CYBER SECURITY USING ARTIFICIAL INTELLIGENCE</td>
      <td> ${attendance[4].Present} </td>
      <td>${attendance[4].Absent} </td>
      <td>${attendance[4].Total} </td>
      <td>${attendance[4].Percentage}% </td>
    </tr>
    <tr>
      <td>AI4146</td>
	<td> BIG DATA ANALYTICS</td>

        <td> ${attendance[5].Present} </td>
      <td>${attendance[5].Absent} </td>
      <td>${attendance[5].Total} </td>
      <td>${attendance[5].Percentage}% </td>
      <td>0%</td>
    </tr>
    <tr>
      <td>AI4170</td>
      <td>INDUSTRIAL TRAINING</td>
      <td> ${attendance[6].Present} </td>
      <td>${attendance[6].Absent} </td>
      <td>${attendance[6].Total} </td>
      <td>${attendance[6].Percentage}% </td>
    </tr>
  </tbody>
</table>
`,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}

export default sendMail;
