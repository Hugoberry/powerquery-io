---
title: Type.NonNullable
---

# Type.NonNullable


Returnerer typen, der ikke kan være null, fra en type.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Returnerer typen, der ikke kan være <code>nullable</code>, fra <code>type</code>.


## Examples

### Example #1 
Returner typen, der ikke kan være null, for &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
