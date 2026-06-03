---
title: Type.IsNullable
---

# Type.IsNullable


Bir tür boş değer atanabilir türde ise true değerini döndürür; aksi takdirde false değerini döndürür.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Bir tür `nullable` tipinde ise `true` değerini döndürür; aksi takdirde `false` değerini döndürür.


## Examples

### Example #1
`number` değerinin boş değer atanabilir türde olup olmadığını belirleyin.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
`type nullable number` değerinin boş değer atanabilir türde olup olmadığını belirleyin.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
