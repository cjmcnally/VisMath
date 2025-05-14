

async function getAIExplanation(equation) {
    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    if (!API_KEY) {
        console.error('No API key found.');
        return {error: 'API key is missing'};
    }
    try {
        const response = await fetch(
            'https://api.openai.com/v1/chat/completions',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${API_KEY}`},
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant that explains mathematical functions clearly and concisely."
                    },
                    {
                        role: "user",
                        content: `Explain the mathematical function ${equation} in simple terms using a couple of sentences. 
                                Then, list its key characteristics as bullet points, with each bullet on a **new line**, like:

                                - First characteristic  
                                - Second characteristic  
                                - Third characteristic
                                `
                    }],
                temperature: 0.7,
                max_tokens: 500
            }),
        });

        // Check if the response is OK
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('API error:', response.status, errorData);

            if (response.status === 429) {
                    const retryAfter = response.headers.get('Retry-After');
                    const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : 4000; // fallback 4s
                    console.warn(`Rate limited. Retrying in ${waitTime / 1000}s...`);
                    await new Promise(res => setTimeout(res, waitTime));
                    return getAIExplanation({ equation }); // retry once inline (optional)
            }

            return {
                error: `API error: ${response.status}`,
                details: errorData
            };
        }

        return await response.json();

    } catch (error) {
        console.log('Error in getting explanation from AI', error);
        return 'explanation unavailable';
    }
}

export default getAIExplanation;

/*
*
*
*
*
* */