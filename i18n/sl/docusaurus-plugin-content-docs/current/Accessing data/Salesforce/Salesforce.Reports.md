---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Vrne poročila iz računa Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Vrne poročila računa Salesforce, ki je naveden v poverilnicah. Račun bo vzpostavil povezavo prek navedenega okolja <code>loginUrl</code>. Če ni navedeno nobeno okolje, bo račun vzpostavil povezavo s spletnim mestom za produkcijo (https://login.salesforce.com). Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:    <ul><li><code>ApiVersion</code> : Različica vmesnika API storitve Salesforce, ki bo uporabljena za to poizvedbo. Če je ne navedete, bo uporabljena različica 29.0 vmesnika API.</li><li><code>Timeout</code> : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus pošiljanja zahteve strežniku. Privzeta vrednost je odvisna od vira.</li></ul>    



## Category
Accessing data
