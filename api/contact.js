function readBody(req) {
  if (req.body && typeof req.body === 'object') return Promise.resolve(req.body);
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 20000) reject(new Error('Mensaje demasiado largo'));
    });
    req.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); } catch { reject(new Error('JSON no válido')); }
    });
    req.on('error', reject);
  });
}

function send(res, status, payload) {
  if (typeof res.status === 'function') return res.status(status).json(payload);
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  return res.end(JSON.stringify(payload));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { error: 'Método no permitido.' });
  }

  try {
    const { name = '', email = '', subject = '', message = '', website = '' } = await readBody(req);
    if (website) return send(res, 200, { message: '¡Gracias! Hemos recibido tu mensaje.' });
    if (name.trim().length < 2 || name.length > 80) return send(res, 400, { error: 'Escribe un nombre válido.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) return send(res, 400, { error: 'Escribe un email válido.' });
    if (message.trim().length < 10 || message.length > 1500) return send(res, 400, { error: 'El mensaje debe tener entre 10 y 1500 caracteres.' });

    const reference = `LV-${Date.now().toString(36).toUpperCase()}`;
    console.log(JSON.stringify({ event: 'contact_received', reference, subject: String(subject).slice(0, 80), receivedAt: new Date().toISOString() }));
    return send(res, 200, { message: `¡Gracias, ${name.trim()}! Tu mensaje ha llegado. Te responderemos muy pronto.`, reference });
  } catch {
    return send(res, 400, { error: 'No hemos podido leer el mensaje.' });
  }
}
