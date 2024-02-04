---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Devolve o tipo não nulo de um tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Devolve o tipo não <code>nullable</code> de <code>type</code>.


## Examples

### Example #1 
Devolve o tipo não nulo de &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
