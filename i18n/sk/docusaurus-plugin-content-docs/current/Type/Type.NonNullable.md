---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Vráti typ s nepovolenou hodnotou Null z typu.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Vráti typ s nepovolenou <code>hodnotou Null</code> z <code>type</code>.


## Examples

### Example #1 
Vráť typ s nepovolenou hodnotou Null &lt;code&gt;zadajte číslo s povolenou hodnotou Null&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
