---
title: Value.Type
---

# Value.Type


Menghasilkan tipe nilai tertentu.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Memberikan tipe nilai tertentu.

-   `value`: Nilai yang tipenya diberikan.


## Examples

### Example #1
Berikan tipe dari angka yang ditentukan.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Berikan tipe dari tanggal yang ditentukan.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Berikan tipe dari catatan yang ditentukan.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
