SELECT u.name, u.email
FROM PERSON p, WORK w
WHERE p.id_work = 1 OR p.age > 30

/*
|--------------------------
| id | name | salary      |
|--------------------------
| 1  | Programmer | $2000 |
| 2  | Mechanic   | $1800 |
| 3  | Reporter   | $900  |
| 4  | Teacher    | $300  |

*/
-- Select people who work as programmers or who are over 30 years old

/*
a) WHERE p.id_work = 1 OR p.age > 30
b) WHERE p.id_work = w.id OR p.age > 30
c) MATCH p.id_work = 1 OR p.age > 30
d) WHERE p.id_work = 1 AND p.age > 30
*/