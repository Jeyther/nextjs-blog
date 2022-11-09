//API Routes let you create an API endpoint inside a Next.js app. 

// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }
  