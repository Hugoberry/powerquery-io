---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importuoti duomenis iš „Google BigQuery“ duomenų bazės.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Pateikiama lentelė su „Google BigQuery“ pasiekiamais projektais. Galima nurodyti pasirenkamą įrašo parametrą `Parinktys`, kad būtų galima valdyti šias parinktis:

-   `ConnectionTimeout`: trukmė, nurodanti kiek laiko leidžiama bandyti užmegzti ryšį su serveriu prieš nutraukiant bandymą. Numatytoji reikšmė yra ODBC ryšio skirtojo laiko reikšmė.
-   `CommandTimeout`: trukmė, nurodanti kiek laiko leidžiama vykdyti serverio užklausą prieš atšaukiant užklausą.
-   `BillingProject`: atsiskaitymo projekto ID. Numatytoji reikšmė yra pirmasis pasiekiamas projektas.
-   `UseStorageApi`: nurodo, ar didelių rezultatų rinkiniams naudoti „BigQuery“ saugyklos API. Numatytoji reikšmė dėl saugyklos API naudojimo yra teisinga. Jei nenorite, kad būtų naudojama saugyklos API, nustatykite reikšmę kaip klaidingą

Įrašo parametras nurodomas kaip \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Išvardijami „Google BigQuery“ pasiekiami projektai
```powerquery
GoogleBigQuery.Database()
```



