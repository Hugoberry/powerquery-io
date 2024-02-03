---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Palauttaa seuraavaksi suurimman kokonaisluvun. Numeroiden määrä voidaan määrittää.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Palauttaa tuloksen pyöristäen <code>number</code> ylöspäin seuraavaan suurimpaan kokonaislukuun. Jos <code>number</code> on tyhjäarvoinen, tämä funktio palauttaa tyhjäarvon.    Jos <code>digits</code> annetaan, <code>number</code> pyöristetään määritettyyn desimaaliin.


## Examples

### Example #1 
Pyöristä luku 1,234 ylöspäin kokonaislukuun.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Pyöristä luku 1,999 ylöspäin kokonaislukuun.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Pyöristä luku 1,234 ylöspäin kahteen desimaaliin.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
