---
title: List.Combine
---

# List.Combine


Mengembalikan senarai tunggal dengan menggabungkan berbilang senarai.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Remarks

Mengambil senarai kepada senarai, `lists` dan menggabungkannya menjadi senarai tunggal baru.


## Examples

### Example #1
Gabungkan dua senarai ringkas \{1, 2\} dan \{3, 4\}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2
Gabungkan dua senarai, \{1, 2\} dan \{3, \{4, 5\}\}, salah satunya mengandungi senarai tersarang.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
