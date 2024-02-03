---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Zwraca typ niedopuszczający wartości null z typu.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Zwraca typ inny niż <code>nullable</code> z typu <code>type</code>.


## Examples

### Example #1 
Zwróć typ niedopuszczający wartości null elementu &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
