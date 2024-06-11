import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
	connectionString: process.env.DATABASE_URL,
	// ssl: {
	// 	rejectUnauthorized: false,
	// },
});

const app = express();

app.use(express.json());

app.get('/api/students/:cohortId', async (req, res, next) => {
	try {
		const cohortId = req.params.cohortId;
		if (!cohortId) {
			throw new ClientError(400, 'Cohort ID is required');
		}
		if (!Number.isInteger(+cohortId)) {
			throw new ClientError(400, 'Cohort ID must be an integer');
		}
		const sql = `
      select * from "students"
      where "cohort_id" = $1
    `;
		const params = [cohortId];
		const students = await db.query(sql, params);
		if (students.rows.length === 0) {
			throw new ClientError(404, 'No students found for the given cohort');
		}
		res.json(students.rows);
	} catch (error) {
		next(error);
	}
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
