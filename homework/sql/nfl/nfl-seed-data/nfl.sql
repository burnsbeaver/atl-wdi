step 3

  1. Select name from Teams;

  2.SELECT stadium, head_coach FROM Teams

  3. select name, head_coach from teams where division = 'South' AND conference = 'AFC';

  4.     SELECT COUNT(*) FROM players;

  5. select name, head_coach from teams where division = 'North' AND conference = 'NFC' OR division = 'East' AND conference = 'AFC';

  6. select AVG(salary) from players;

  7.  SELECT name, position FROM players WHERE salary > 10000000;

  9 select name, salary from players ORDER BY salary desc limit 1;

  10. select name, position, salary from players ORDER BY salary asc limit 100

  11. select AVG(salary) from players WHERE position = 'DE';

  12. select players.name, teams.name 
