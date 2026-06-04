---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Returnează un tabel de navigare ce conţine tabelele găsite în contul specificat dintr-un seif de stocare Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel de navigare care conține un rând pentru fiecare tabel găsit la adresa URL a contului, `account`, dintr-un seif de stocare Azure. Fiecare rând conține un link la tabelul Azure. Poate fi furnizat un parametru de înregistrare opțional `options` pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `Timeout` : O durată care controlează cât timp se așteaptă înainte de a abandona solicitarea pentru server. Valoarea implicită este specifică fiecărei surse.



## Category
Accessing data
