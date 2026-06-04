---
title: Salesforce.Reports
---

# Salesforce.Reports


Vrne poročila iz računa Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Vrne poročila računa Salesforce, ki je naveden v poverilnicah. Račun bo vzpostavil povezavo prek navedenega okolja `loginUrl`. Če ni navedeno nobeno okolje, bo račun vzpostavil povezavo s spletnim mestom za produkcijo (https://login.salesforce.com). Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:

-   `ApiVersion` : Različica vmesnika API storitve Salesforce, ki bo uporabljena za to poizvedbo. Če je ne navedete, bo uporabljena različica 29.0 vmesnika API.
-   `Timeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus pošiljanja zahteve strežniku. Privzeta vrednost je odvisna od vira.



## Category
Accessing data
