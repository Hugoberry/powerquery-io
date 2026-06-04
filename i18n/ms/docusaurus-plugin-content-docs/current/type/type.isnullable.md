---
title: Type.IsNullable
---

# Type.IsNullable


Kembalikan true jika jenis merupakan jenis boleh nol; jika tidak, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Kembalikan `true` jika jenis merupakan jenis `nullable` ; jika tidak, `false`.


## Examples

### Example #1
Tentukan jika `number` merupakan boleh nol.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Tentukan jika jenis `nombor boleh nol` merupakan boleh nol.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
