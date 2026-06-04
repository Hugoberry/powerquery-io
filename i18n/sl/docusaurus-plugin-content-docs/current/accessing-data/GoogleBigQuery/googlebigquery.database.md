---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Uvozite podatke iz zbirke podatkov storitve Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Vrne tabelo, v kateri so navedeni projekti, ki so na voljo v storitvi Google BigQuery. Naveden je lahko izbirni parameter zapisa `možnosti` za nadzor teh možnosti:

-   `ConnectionTimeout`: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je vrednost časovne omejitve povezave ODBC.
-   `CommandTimeout`: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana.
-   `BillingProject`: ID projekta obračunavanja. Privzeta vrednost je prvi razpoložljivi projekt.
-   `UseStorageApi`: določa, ali bo za velike nabore rezultatov uporabljen vmesnik API shrambe storitve BigQuery. Privzeta vrednost je"true", ki določa uporabo vmesnika API shrambe. Nastavite na"false", če ne želite uporabiti vmesnika API shrambe

Parameter zapisa je določen kot \[option1 = value1, option2 = value2 ...\].


## Examples

### Example #1
Prikaži projekte, ki so na voljo v storitvi Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



