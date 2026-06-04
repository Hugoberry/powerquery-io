---
title: Type.IsNullable
---

# Type.IsNullable


Menghasilkan true jika jenisnya adalah jenis yang bisa memiliki nilai nol; jika tidak maka dihasilkan false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Menghasilkan `true` jika jenisnya adalah `nullable`; jika tidak maka hasilnya `false`.


## Examples

### Example #1
Tentukan apakah `number` bisa berisi nilai nol.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Tentukan apakah `type nullable number` dapat berisi nilai nol.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
