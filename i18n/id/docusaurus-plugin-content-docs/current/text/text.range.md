---
title: Text.Range
---

# Text.Range


Menghasilkan substring yang ditemukan pada offset.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Mengembalikan substring dari teks `text` yang ditemukan pada offset `offset`. Parameter opsional, `count`, dapat disertakan untuk menentukan jumlah karakter yang akan dihasilkan. Memunculkan kesalahan jika karakter tidak cukup.


## Examples

### Example #1
Mencari substring dari teks "Hello World" mulai pada indeks 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Mencari substring dari teks "Hello World Hello" dimulai pada indeks 6 sekitar 5 karakter.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
