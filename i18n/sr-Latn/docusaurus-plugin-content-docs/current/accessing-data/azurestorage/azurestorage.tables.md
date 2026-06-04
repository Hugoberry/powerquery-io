---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Vraća navigacionu tabelu koja sadrži tabele pronađene na navedenom nalogu iz Azure bezbednog skladišta.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu za navigaciju koja sadrži red za svaku tabelu pronađenu na URL adresi naloga, `account`, iz Azure bezbednog skladišta. Svaki red sadrži vezu ka Azure tabeli. Moguće je navesti opcionalni parametar zapisa, `options`, da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:

-   `Timeout` : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od zahteva upućenog serveru. Podrazumevana vrednost zavisi od izvora.



## Category
Accessing data
