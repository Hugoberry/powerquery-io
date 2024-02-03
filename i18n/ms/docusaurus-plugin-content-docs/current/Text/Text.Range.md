---
title: Text.Range
---

# Text.Range


## Description

Mengembalikan subrentetan yang ditemui di ofset.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Mengembalikan subrentetan daripada teks <code>text</code> yang ditemui di ofset <code>offset</code>.     Parameter pilihan, <code>count</code>, boleh disertakan untuk menentukan bilangan aksara untuk dikembalikan. Mencampakkan ralat jika tidak mempunyai aksara yang cukup.


## Examples

### Example #1 
Cari subrentetan daripada teks &#34;Hello World&#34; yang bermula pada indeks 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Cari subrentetan daripada teks &#34;Hello World Hello&#34; yang bermula pada indeks 6 dan menjangkau 5 aksara.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
