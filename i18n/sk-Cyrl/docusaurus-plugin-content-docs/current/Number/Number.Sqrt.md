---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Vráti druhú odmocninu čísla.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Vráti druhú odmocninu čísla <code>number</code>.    Ak hodnota <code>number</code> je null, funkcia <code>Number.Sqrt</code> vráti hodnotu null. Ak ide o zápornú hodnotu, vráti sa hodnota <code>Number.NaN</code> (nečíselná).


## Examples

### Example #1 
Nájdite druhú odmocninu čísla 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Nájdite druhú odmocninu čísla 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
