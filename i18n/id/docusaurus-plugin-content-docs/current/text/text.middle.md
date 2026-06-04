---
title: Text.Middle
---

# Text.Middle


Menghasilkan substring hingga panjang tertentu.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Menghasilkan `count` karakter, atau melalui akhir `text`; pada keseimbangan `start`.


## Examples

### Example #1
Temukan substring dari teks "Hello World" yang dimulai pada indeks 6 yang merentang 5 karakter.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Cari substring dari teks "Hello World" yang dimulai pada indeks 6 hingga akhir.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Temukan substring dari teks "Halo Dunia" yang dimulai dari indeks 0 yang sebanyak 2 karakter.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
