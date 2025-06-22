import Anthropic from "@anthropic-ai/sdk";
const anthropic = new Anthropic();

document.getElementById("ask").addEventListener("click", async () => {
    const prompt = document.getElementById("input").value;

    const response = await anthropic.messages.create({
        model: "claude-opus-4-20250514",
        max_tokens: 1000,
        temperature: 1,
        system: "Respond only with short poems.",
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: prompt
                    }
                ]
            }
        ]
    });
    console.log(response);
    document.getElementById("response").textContent = response;
});