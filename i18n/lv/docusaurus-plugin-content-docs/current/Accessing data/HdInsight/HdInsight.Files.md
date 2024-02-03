---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Atgriež tabulu ar to BLOB failu rekvizītiem un saturu, kas atrasti norādītajā konteinerā no Azure krātuves akreditācijas datu komplekta.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Atgriež tabulu ar rindām par katru BLOB failu, kas atrasts, izmantojot konteinera vietrādi URL, <code>account</code>, no Azure krātuves akreditācijas datu komplekta. Katrā rindā ir faila rekvizīti un saite uz tā saturu.



## Category
Accessing data
