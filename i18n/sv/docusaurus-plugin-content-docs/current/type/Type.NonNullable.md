---
title: Type.NonNullable
---

# Type.NonNullable


Returnerar den ej nullbara typen från en typ.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Returnerar den ej <code>nullable</code> typen från <code>type</code>.


## Examples

### Example #1 
Returnerar den ej nullbara typen för &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
