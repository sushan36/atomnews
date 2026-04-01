export default async function handler(req, res) {
  try {
    const { title, desc } = req.query;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=gen-lang-client-0811695844",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Write a professional 600-word news article in BBC style.

Title: ${title}
Summary: ${desc}

Requirements:
- Formal tone
- Multiple paragraphs
- Detailed explanation
- No repetition`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const article =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Failed to generate article.";

    res.status(200).json({ article });

  } catch (error) {
    res.status(500).json({ error: "AI failed" });
  }
}






