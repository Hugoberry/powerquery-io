---
title: Value.Optimize
---

# Value.Optimize


## Description

Signalizuje, že Value.Expression vráti optimalizovaný výraz pre hodnotu.


## Syntax

```powerquery
Value.Optimize(
    value as any
) as any
```


## Details

Ak <code>value</code> predstavuje dotaz, ktorý je možné optimalizovať, táto funkcia pri použití v rámci Value.Expression indikuje, že sa má vrátiť optimalizovaný výraz. V opačnom prípade sa <code>value</code> odovzdá bez efektu.



## Category
Expression
