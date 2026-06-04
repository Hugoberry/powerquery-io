---
title: Text.Insert
---

# Text.Insert


Memasukkan satu nilai teks ke dalam yang lain di kedudukan yang ditentukan.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Mengembalikan hasil daripada memasukkan nilai teks `newText` ke dalam nilai teks `text` di kedudukan `offset`. Kedudukan bermula di nombor 0.


## Examples

### Example #1
Masukkan "C" antara "B" dan "D" dalam "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
