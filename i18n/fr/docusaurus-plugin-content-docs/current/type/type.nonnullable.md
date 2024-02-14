---
title: Type.NonNullable
---

# Type.NonNullable


Retourne le type non nullable d&#39;un type.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Retourne le type non <code>nullable</code> de <code>type</code>.


## Examples

### Example #1 
Retournez le type non nullable de &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
