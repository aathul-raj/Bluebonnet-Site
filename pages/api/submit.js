export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;
    formData.access_key = process.env.WEB3FORMS_ACCESS_KEY;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (result.success) {
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(500).json({ message: 'Error submitting form' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}