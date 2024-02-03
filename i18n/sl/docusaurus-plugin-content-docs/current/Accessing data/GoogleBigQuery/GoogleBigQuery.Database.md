---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Uvozite podatke iz zbirke podatkov storitve Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Vrne tabelo, v kateri so navedeni projekti, ki so na voljo v storitvi Google BigQuery. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:      <ul>        <li><code>ConnectionTimeout</code>: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je vrednost izteka povezave z ODBC.</li>        <li><code>CommandTimeout</code>: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana.</li>        <li><code>BillingProject</code>: ime projekta obračunavanja. Privzeta vrednost je prvi projekt, ki je na voljo.</li>        <li><code>UseStorageApi</code>: določa, ali bo za velika nabore rezultatov uporabljen vmesnik API shrambe storitve BigQuery. Privzeta vrednost je "true", ki določa uporabo vmesnika API shrambe. Nastavite jo na "false", če ne želite uporabiti vmesnika API shrambe.</li>      </ul>    Parameter zapisa je na primer naveden kot [možnost1 = vrednost1, možnost2 = vrednost2 ...].    


## Examples

### Example #1 
Prikaži projekte, ki so na voljo v storitvi Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



