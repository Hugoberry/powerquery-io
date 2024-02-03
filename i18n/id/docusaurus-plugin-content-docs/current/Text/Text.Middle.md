---
title: Text.Middle
---

# Text.Middle


## Description

Menghasilkan substring hingga panjang tertentu.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Menghasilkan <code>count</code> karakter, atau melalui akhir <code>text</code>; pada keseimbangan <code>start</code>.


## Examples

### Example #1 
Temukan substring dari teks &#34;Hello World&#34; yang dimulai pada indeks 6 yang merentang 5 karakter.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Cari substring dari teks &#34;Hello World&#34; yang dimulai pada indeks 6 hingga akhir.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
