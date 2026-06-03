---
title: Type.NonNullable
---

# Type.NonNullable


Bir türden boş değer atanabilir olmayan türü döndürür.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

`type` kaynağından `nullable` olmayan türü döndürür.


## Examples

### Example #1
`type nullable number` için boş değer atanabilir olmayan türü döndürür.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
