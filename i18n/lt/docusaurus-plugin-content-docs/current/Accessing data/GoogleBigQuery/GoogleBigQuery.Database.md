---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Importuoti duomenis iš „Google BigQuery“ duomenų bazės.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Pateikiama lentelė su „Google BigQuery“ pasiekiamais projektais. Galima nurodyti pasirinktinį įrašo parametrą <code>options</code> toliau nurodytoms parinktims valdyti:      <ul>        <li><code>ConnectionTimeout</code>: trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė – ODBC ryšio skirtojo laiko reikšmė. </li>        <li><code>CommandTimeout</code>: trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. </li>        <li><code>BillingProject</code>: sąskaitų pateikimo projekto ID. Numatytoji reikšmė – pirmasis galimas projektas.</li>        <li><code>UseStorageApi</code>: nurodoma, ar „BigQuery“ saugyklos API naudoti didelių rezultatų atveju. Numatytoji saugyklos API naudojimo reikšmė yra teisinga. Jei nenorite naudoti saugyklos API, reikšmę nustatykite kaip klaidingą</li>      </ul>    Įrašo parametras nurodomas kaip [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Išvardijami „Google BigQuery“ pasiekiami projektai
```powerquery
GoogleBigQuery.Database()
```



