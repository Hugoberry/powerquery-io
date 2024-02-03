---
title: Text.Range
---

# Text.Range


## Description

Menghasilkan substring yang ditemukan pada offset.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Mengembalikan substring dari teks <code>text</code> yang ditemukan pada offset <code>offset</code>.    Parameter opsional, <code>count</code>, dapat disertakan untuk menentukan jumlah karakter yang akan dihasilkan. Memberikan kesalahan jika karakternya tidak cukup.


## Examples

### Example #1 
Mencari substring dari teks &#34;Hello World&#34; mulai pada indeks 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Mencari substring dari teks &#34;Hello World Hello&#34; dimulai pada indeks 6 sekitar 5 karakter.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
