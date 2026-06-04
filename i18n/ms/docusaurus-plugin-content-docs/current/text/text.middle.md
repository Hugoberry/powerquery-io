---
title: Text.Middle
---

# Text.Middle


Mengembalikan subrentetan sehingga panjang yang ditentukan.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Mengembalikan `count` aksara atau sehingga akhir `text`; pada ofset `start`.


## Examples

### Example #1
Cari subrentetan dari teks "Hello World" bermula pada indeks 6 perentangan 5 aksara.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Cari subrentetan dari teks "Hello World" bermula pada indeks 6 sehingga ke akhir.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Cari subrentetan daripada teks "Hello World" yang bermula pada indeks 0 yang merentangi 2 aksara.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
