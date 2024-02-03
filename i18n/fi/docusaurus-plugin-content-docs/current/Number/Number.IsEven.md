---
title: Number.IsEven
---

# Number.IsEven


## Description

Ilmaisee, onko arvo parillinen.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Details

Ilmaisee, onko arvo <code>number</code> parillinen, palauttamalla arvon <code>true</code>, jos se on parillinen, ja muussa tapauksessa arvon <code>false</code>.


## Examples

### Example #1 
Tarkista, onko 625 parillinen luku.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
Tarkista, onko 82 parillinen luku.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
