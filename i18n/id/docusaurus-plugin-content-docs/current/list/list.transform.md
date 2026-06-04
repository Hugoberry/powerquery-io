---
title: List.Transform
---

# List.Transform


Menghasilkan daftar nilai baru yang dihitung dari daftar ini.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Menghasilkan daftar nilai baru dengan menerapkan fungsi transformasi `transform` terhadap daftar, `list`.


## Examples

### Example #1
Menambah 1 ke setiap nilai dalam daftar \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
