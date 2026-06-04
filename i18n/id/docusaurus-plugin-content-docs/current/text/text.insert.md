---
title: Text.Insert
---

# Text.Insert


Menyisipkan satu nilai teks ke nilai teks lain pada posisi tertentu.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Memberikan hasil penyisipan nilai teks `newText` ke nilai teks `text` pada posisi `offset`. Posisi dimulai pada angka 0.


## Examples

### Example #1
Menyisipkan "C" antara "B" dan "D" pada "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
