---
title: Snowflake.Databases
---

# Snowflake.Databases


Importuoti duomenis iš „Snowflake“ duomenų apdorojimo sandėlio.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Pateikiama lentelė, kurioje išvardijamos „Snowflake“ duomenų apdorojimo `sandėlio`, esančio `serveryje`, lentelės. Galima nurodyti pasirinktinį įrašo parametrą `parinktys`, norint valdyti toliau nurodytas parinktis.

-   `„Role“`: tekstinė reikšmė, naudojama kaip ryšio vaidmens pavadinimas.
-   `„CreateNavigationProperties“`: loginė reikšmė ( „true“ / „false“), nustatanti, ar reikia generuoti pateikiamų reikšmių naršymo ypatybes (numatytoji reikšmė yra „true“)
-   `„ConnectionTimeout“`: kiek sekundžių laukti tinklo atsako iš „Snowflake“.
-   `„CommandTimeout“`: kiek sekundžių laukti, kol bus įvykdyta užklausa.


## Examples

### Example #1
Pateikti lentelių „Snowflake“ sandėlyje sąrašą.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



