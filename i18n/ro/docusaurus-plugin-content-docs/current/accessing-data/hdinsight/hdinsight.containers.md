---
title: HdInsight.Containers
---

# HdInsight.Containers


Returnează un tabel de navigare ce conține containerele găsite în contul specificat dintr-un seif de stocare Azure.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Remarks

Returnează un tabel de navigare ce conține un rând pentru fiecare container găsit la adresa URL a contului, `account`, dintr-un seif de stocare Azure. Fiecare rând conține un link la bloburile containerului.



## Category
Accessing data
