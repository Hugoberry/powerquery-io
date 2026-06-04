---
title: Value.Type
---

# Value.Type


Mengembalikan jenis nilai yang ditentukan.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Mengembalikan jenis nilai yang diberikan.

-   `value`: Nilai yang jenisnya dikembalikan.


## Examples

### Example #1
Mengembalikan jenis nombor yang ditentukan.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Mengembalikan jenis tarikh yang ditentukan.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Mengembalikan jenis rekod yang ditentukan.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
