---
title: List.Buffer
---

# List.Buffer


## Description

Mem-buffer daftar.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Mem-buffer daftar <code>list</code> dalam memori. Hasil dari panggilan ini adalah daftar stabil.


## Examples

### Example #1 
Membuat salinan stabil dari daftar \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
