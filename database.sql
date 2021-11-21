CREATE TABLE tasks (
	"id" serial PRIMARY KEY,
	"task" varchar(500) NOT NULL,
	"completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO
tasks (task, completed)
VALUES
('Take out the trash', false);
