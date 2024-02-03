---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Vrne tabelo za krmarjenje, ki vsebuje tabele, najdene v določenem računu iz trezorja shrambe Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Vrne tabelo za krmarjenje, ki vsebuje vrstico za vsako tabelo, najdeno na URL-ju računa (<code>account</code>), iz trezorja shrambe Azure. Vsaka vrstica vsebuje povezavo do tabele Azure. Navedete lahko izbirni parameter zapisa <code>options</code>, ki določa dodatne lastnosti. Zapis lahko vsebuje ta polja:    <ul><li><code>Timeout</code> : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus pošiljanja zahteve strežniku. Privzeta vrednost je odvisna od vira.</li></ul>



## Category
Accessing data
