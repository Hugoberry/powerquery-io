---
title: Type.NonNullable
---

# Type.NonNullable


Devuelve el tipo que no acepta valores NULL de un tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Devuelve el tipo no <code>nullable</code> de <code>type</code>.


## Examples

### Example #1 
Devuelve el tipo que no acepta valores NULL de &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
