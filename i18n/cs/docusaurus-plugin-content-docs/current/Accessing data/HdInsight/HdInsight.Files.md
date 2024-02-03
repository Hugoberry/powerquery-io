---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Vrátí tabulku obsahující vlastnosti a obsah objektů blob nalezené v zadaném kontejneru v trezoru úložiště služby Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Vrátí tabulku obsahující řádek pro každý soubor blob nalezený na adrese URL kontejneru <code>account</code> z trezoru úložiště služby Azure. Každý řádek obsahuje vlastnosti souboru a odkaz na jeho obsah.



## Category
Accessing data
