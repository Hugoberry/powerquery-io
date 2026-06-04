---
title: Salesforce.Data
---

# Salesforce.Data


Vrne predmete iz računa Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Vrne predmete računa Salesforce, ki je naveden v poverilnicah. Račun bo vzpostavil povezavo prek navedenega okolja `loginUrl`. Če ni navedeno nobeno okolje, bo račun vzpostavil povezavo s spletnim mestom za produkcijo (https://login.salesforce.com). Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:

-   `CreateNavigationProperties` : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je"false").
-   `ApiVersion` : Različica vmesnika API storitve Salesforce, ki bo uporabljena za to poizvedbo. Če je ne navedete, bo uporabljena različica 29.0 vmesnika API.
-   `Timeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus pošiljanja zahteve strežniku. Privzeta vrednost je odvisna od vira.



## Category
Accessing data
