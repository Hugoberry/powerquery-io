---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Vraća tabelu koja sadrži svojstva i sadržaj blob objekata pronađenih u navedenom kontejneru iz Azure bezbednog skladišta.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Vraća tabelu koja sadrži red za svaku blob datoteku pronađenu na URL adresi kontejnera, <code>account</code>, iz Azure bezbednog skladišta. Svaki red sadrži svojstva datoteke i vezu ka njenom sadržaju.



## Category
Accessing data
