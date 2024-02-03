---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Returnează un tabel de navigare ce conţine tabelele găsite în contul specificat dintr-un seif de stocare Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Returnează un tabel de navigare care conține un rând pentru fiecare tabel găsit la adresa URL a contului, <code>account</code>, dintr-un seif de stocare Azure. Fiecare rând conține un link la tabelul Azure. Se poate furniza un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietățile suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>Timeout</code> : O durată care controlează c&#226;t timp se așteaptă &#238;nainte de a abandona solicitarea pentru server. Valoarea implicită este specifică fiecărei surse.</li></ul>



## Category
Accessing data
