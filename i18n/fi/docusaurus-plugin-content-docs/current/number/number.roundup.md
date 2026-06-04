---
title: Number.RoundUp
---

# Number.RoundUp


Palauttaa seuraavaksi suurimman kokonaisluvun. Numeroiden määrä voidaan määrittää.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Palauttaa tuloksen pyöristäen `number` ylöspäin seuraavaan suurimpaan kokonaislukuun. Jos `number` on tyhjäarvoinen, tämä funktio palauttaa tyhjäarvon. Jos `digits` annetaan, `number` pyöristetään määritettyyn desimaaliin.


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
