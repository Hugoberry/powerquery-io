---
title: Value.Optimize
---

# Value.Optimize


## Description

Signals Value.Expression to return the optimized expression for a value.


## Syntax

```powerquery
Value.Optimize(
    value as any
) as any
```


## Details

When used within Value.Expression, if <code>value</code> represents a query that can be optimized, this function indicates that the optimized expression should be returned. Otherwise, <code>value</code> will be passed through with no effect.



## Category
Expression
