---
title: Value.Optimize
---

# Value.Optimize


Signalizuje, že Value.Expression vráti optimalizovaný výraz pre hodnotu.


## Syntax

```powerquery
Value.Optimize(
    value as any
) as any
```


## Remarks

Ak `value` predstavuje dotaz, ktorý je možné optimalizovať, táto funkcia pri použití v rámci Value.Expression indikuje, že sa má vrátiť optimalizovaný výraz. V opačnom prípade sa `value` odovzdá bez efektu.



## Category
Expression
