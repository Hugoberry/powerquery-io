---
title: Text.Clean
---

# Text.Clean


## Description

Menghasilkan nilai teks dengan menghapus semua karakter kontrol.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Menghasilkan sebuah nilai teks dengan menghapus semua karakter kontrol <code>text</code>.


## Examples

### Example #1 
Menghapus umpan baris dan karakter kontrol lainnya dari nilai teks.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
