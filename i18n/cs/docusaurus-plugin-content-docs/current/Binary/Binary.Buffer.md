---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Uloží binární hodnotu do vyrovnávací paměti.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Uloží binární hodnotu do vyrovnávací paměti. Výsledkem tohoto volání je stabilní binární hodnota, což znamená, že bude mít deterministickou délku a pořadí bajtů.


## Examples

### Example #1 
Vytvořit stabilní verzi binární hodnoty
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
