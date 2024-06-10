CREATE TABLE "cohorts" (
  "cohort_id" serial PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL
);

CREATE TABLE "students" (
  "student_id" serial PRIMARY KEY,
  "first_name" varchar(100),
  "last_name" varchar(100),
  "cohort_id" integer
);

ALTER TABLE "students" ADD FOREIGN KEY ("cohort_id") REFERENCES "cohorts" ("cohort_id");
