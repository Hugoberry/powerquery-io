---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Ilmaisee, onko arvo pariton.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Ilmaisee, onko arvo pariton. Palauttaa arvon <code>true</code>, jos <code>number</code> on pariton luku, ja muussa tapauksessa arvon <code>false</code>.


## Examples

### Example #1 
Tarkista, onko 625 pariton luku.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
Tarkista, onko 82 pariton luku.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
