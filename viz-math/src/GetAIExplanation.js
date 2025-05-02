async function getAIExplanation({equation}) {
    try {
        const response = await fetch(
            'https://api.openai.com/v1/chat/completions',
            {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                'Authorization':"Bearer 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"},
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant that explains mathematical functions clearly and concisely."
                    },
                    {
                        role: "user",
                        content: `Explain the mathematical function ${equation} in simple terms, including its key characteristics.`
                    }
                ],
                temperature: 0.7,
                max_tokens: 250
            }),
        });

        return await response.json();

    } catch (error) {
        console.log('Error in getting explanation from AI', error);
        return 'explanation unavailable';
    }
}

export default getAIExplanation;