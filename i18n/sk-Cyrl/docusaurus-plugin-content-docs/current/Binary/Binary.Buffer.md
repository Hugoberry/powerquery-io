---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Uloží binárnu hodnotu do medzipamäte.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Uloží binárnu hodnotu do medzipamäte. Výsledkom tohto volania je stabilná binárna hodnota, t. j. bude mať definovanú dĺžku a poradie bajtov.


## Examples

### Example #1 
Vytvorte stabilnú verziu binárnej hodnoty.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
