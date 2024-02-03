---
title: Vertica.Database
---

# Vertica.Database


## Description

Importuoti duomenis iš „Vertica“


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Pateikiama duomenų bazės, pavadintos pagal <code>database</code> parametrą, serveryje, pavadintame pagal <code>server</code> parametrą, esančių schemų lentelė.Norint nurodyti papildomas ypatybes, gali būti nurodytas pasirenkamas įrašo parametras <code>options</code>. Įraše gali būti šie laukai:<ul>    <li><code>ConnectionTimeout</code>: trukmė, kontroliuojanti, kiek laiko laukti prieš nutraukiant bandymą užmegzti ryšį su serveriu. Numatytoji reikšmė priklauso nuo tvarkyklės.</li>    <li><code>CommandTimeout </code>: trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li></ul>


## Examples

### Example #1 
Pateikiamos lentelės platformoje „Vertica“
```powerquery

```



