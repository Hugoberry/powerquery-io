---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Returnează un tabel ce conține proprietățile și conținutul bloburilor găsite în containerul specificat dintr-un seif de stocare Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Returnează un tabel ce conține un rând pentru fiecare fișier blob găsit în adresa URL a containerului, <code>account</code>, dintr-un seif de stocare Azure. Fiecare rând conține proprietăți ale fișierului și un link la conținutul său.



## Category
Accessing data
