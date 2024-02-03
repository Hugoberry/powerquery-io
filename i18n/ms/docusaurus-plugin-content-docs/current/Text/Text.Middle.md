---
title: Text.Middle
---

# Text.Middle


## Description

Mengembalikan subrentetan sehingga panjang yang ditentukan.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Mengembalikan <code>count</code> aksara atau sehingga akhir <code>text</code>; pada ofset <code>start</code>.


## Examples

### Example #1 
Cari subrentetan dari teks &#34;Hello World&#34; bermula pada indeks 6 perentangan 5 aksara.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Cari subrentetan dari teks &#34;Hello World&#34; bermula pada indeks 6 sehingga ke akhir.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
