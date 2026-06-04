---
title: Text.Range
---

# Text.Range


Mengembalikan subrentetan yang ditemui di ofset.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Mengembalikan subrentetan daripada teks `text` yang ditemui di ofset `offset`. Parameter pilihan, `count`, boleh disertakan untuk menentukan bilangan aksara untuk dikembalikan. Memaparkan ralat jika tidak mempunyai aksara yang cukup.


## Examples

### Example #1
Cari subrentetan daripada teks "Hello World" yang bermula pada indeks 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Cari subrentetan daripada teks "Hello World Hello" yang bermula pada indeks 6 dan menjangkau 5 aksara.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
