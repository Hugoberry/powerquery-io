---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Importuoti duomenis iš „Snowflake“ duomenų apdorojimo sandėlio.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Pateikiama lentelė, kurioje išvardijamos „Snowflake“ duomenų apdorojimo <code>sandėlio</code>, esančio <code>serveryje</code>, lentelės. Galima nurodyti pasirinktinį įrašo parametrą <code>parinktys</code>, norint valdyti toliau nurodytas parinktis.<ul><li><code>„Role“</code>: tekstinė reikšmė, naudojama kaip ryšio vaidmens pavadinimas.</li><li><code>„CreateNavigationProperties“</code>: loginė reikšmė ( „true“ / „false“), nustatanti, ar reikia generuoti pateikiamų reikšmių naršymo ypatybes (numatytoji reikšmė yra „true“)</li><li><code>„ConnectionTimeout“</code>: kiek sekundžių laukti tinklo atsako iš „Snowflake“.</li><li><code>„CommandTimeout“</code>: kiek sekundžių laukti, kol bus įvykdyta užklausa.</li></ul>    


## Examples

### Example #1 
Pateikti lentelių „Snowflake“ sandėlyje sąrašą.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



