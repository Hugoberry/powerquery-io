---
title: Value.Optimize
---

# Value.Optimize


Signals Value.Expression to return the optimized expression for a value.


## Syntax

```powerquery
Value.Optimize(
    value as any
) as any
```


## Remarks

When used within Value.Expression, if `value` represents a query that can be optimized, this function indicates that the optimized expression should be returned. Otherwise, `value` will be passed through with no effect.



## Category
Expression
