---
title: Vertica.Database
---

# Vertica.Database


Importuoti duomenis iš „Vertica“


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Pateikiama duomenų bazės, pavadintos pagal `database` parametrą, serveryje, pavadintame pagal `server` parametrą, esančių schemų lentelė. Norint nurodyti papildomas ypatybes, gali būti nurodytas pasirenkamas įrašo parametras `options`. Įraše gali būti šie laukai:

-   `ConnectionTimeout`: trukmė, kontroliuojanti, kiek laiko laukti prieš nutraukiant bandymą užmegzti ryšį su serveriu. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `CommandTimeout` : trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.


## Examples

### Example #1
Pateikiamos lentelės platformoje „Vertica“
```powerquery

```



