import axios from 'axios';


export const home =  (req, res) => {
    res.send('¡Bienvenido al chatbot con ChatGPT! Envía un mensaje POST a /chat para hablar con el bot.');
}

export const chat =  async (req, res) => {
    const { message } = req.body;
  
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'system', content: 'Tú eres un asistente de chat que ayuda con información general.' }, { role: 'user', content: message }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );
  
      const reply = response.data.choices[0].message.content;
  
      res.json({ reply });
    } catch (error) {
      console.error('Error al interactuar con ChatGPT:', error);
      res.status(500).json({ error: 'Ocurrió un error al interactuar con el bot.' });
    }
}