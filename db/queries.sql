SELECT * FROM department

SELECT * FROM job_role


SELECT ( employee.id, employee.first_name, employee.last_name, employee.manager_id, job_role.salary, job_role.department_id, job_role.title) 
FROM employee 
INNER JOIN job_role ON (job_role.id) = employee.role_id 
