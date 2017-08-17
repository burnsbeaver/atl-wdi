1. least populated country in southern europe
carmen=# SELECT name, population, region FROM country WHERE region = 'Southern Europe';
Holy See, vatican city

2. Language spoken in vatican city
carmen=# select * from countrylanguage WHERE countrycode = 'VAT'
Italian

3.select * from countrylanguage where language = 'Italian';
san marino, 100% italian spoken

4. Find the city in italy that she could be flying out of that isnt named italy?
SELECT name FROM city WHERE countrycode = 'SMR';
Serravalle

5.  SELECT * FROM city WHERE name LIKE 'Serr%';

Serra, Brazil

6. SELECT capital FROM country WHERE code='BRA';

7. sELECT name FROM city WHERE id=211;
brasilia

8.SELECT * FROM city WHERE population = 91084;
Santa monica
