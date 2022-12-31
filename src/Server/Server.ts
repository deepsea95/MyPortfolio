import express, { Request, Response } from 'express';
import 'express-async-errors';
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
const nodemailer = require('nodemailer');

// const smtpTransport = require('nodemailer-smtp-transport');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post('/sendMail', async (req: Request, res: Response) => {
    const { email, subject, message } = req.body;
	const transport = nodemailer.createTransport({
		service: 'gmail',
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		// secure: false,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		}
	});

	await transport.sendMail({
		from: `${email}`,
		to: process.env.MAIL_USER,
		subject: `${subject}`,
		html: `<p>${message}</p>`
	});
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
