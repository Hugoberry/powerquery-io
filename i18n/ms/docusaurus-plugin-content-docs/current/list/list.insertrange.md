---
title: List.InsertRange
---

# List.InsertRange


Memasukkan nilai ke dalam senarai pada indeks yang ditentukan.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Mengembalikan senarai baru yang dihasilkan dengan memasukkan nilai dalam `values` ke dalam `list` pada `index`. Kedudukan pertama dalam senarai ialah indeks 0.

-   `list`: Senarai sasaran yang mana nilai perlu dimasukkan.
-   `index`: Indeks senarai sasaran (`list`) yang mana nilai perlu dimasukkan. Kedudukan pertama dalam senarai ialah indeks 0.
-   `values`: Senarai nilai yang perlu dimasukkan ke dalam `list`.


## Examples

### Example #1
Masukkan senarai (\{3, 4\}) ke dalam senarai sasaran (\{1, 2, 5\}) pada indeks 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
Masukkan senarai dengan senarai tersarang (\{1, \{1.1, 1.2\}\}) ke dalam senarai sasaran (\{2, 3, 4\}) pada indeks 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
