---
title: HdInsight.Files
---

# HdInsight.Files


Devolve unha táboa que contén as propiedades e contidos dos BLOB atopados no contedor especificado dunha caixa forte de almacenamento de Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Devolve unha táboa que contén unha fila para cada ficheiro de BLOB atopado no URL do contedor, `account`, dunha caixa forte de almacenamento de Azure. Cada fila contén propiedades do ficheiro e unha ligazón ao seu contido.



## Category
Accessing data
