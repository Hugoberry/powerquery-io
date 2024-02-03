---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Vraća navigacionu tabelu koja sadrži tabele pronađene na navedenom nalogu iz Azure bezbednog skladišta.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Vraća tabelu za navigaciju koja sadrži red za svaku tabelu pronađenu na URL adresi naloga, <code>account</code>, iz Azure bezbednog skladišta. Svaki red sadrži vezu ka Azure tabeli. Može se dodati opcionalni parametar zapisa, <code>options</code>, radi navođenja dodatnih svojstava. Zapis može da sadrži sledeća polja:    <ul><li><code>Timeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od zahteva upućenog serveru. Podrazumevana vrednost zavisi od izvora.</li></ul>



## Category
Accessing data
