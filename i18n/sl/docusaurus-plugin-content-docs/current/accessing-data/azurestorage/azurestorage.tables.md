---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Vrne tabelo za krmarjenje, ki vsebuje tabele, najdene v določenem računu iz trezorja shrambe Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo za krmarjenje, ki vsebuje vrstico za vsako tabelo, najdeno na URL-ju računa (`account`), iz trezorja shrambe Azure. Vsaka vrstica vsebuje povezavo do tabele Azure. Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:

-   `Timeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus pošiljanja zahteve strežniku. Privzeta vrednost je odvisna od vira.



## Category
Accessing data
