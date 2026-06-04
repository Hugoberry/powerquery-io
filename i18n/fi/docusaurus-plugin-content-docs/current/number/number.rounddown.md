---
title: Number.RoundDown
---

# Number.RoundDown


Palauttaa edelliseksi suurimman kokonaisluvun. Numeroiden määrä voidaan määrittää.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Palauttaa tuloksen pyöristäen `number` alaspäin edelliseen suurimpaan kokonaislukuun. Jos `number` on tyhjäarvoinen, tämä funktio palauttaa tyhjäarvon. Jos `digits` annetaan, `number` pyöristetään määritettyyn desimaaliin.


## Examples

### Example #1
Pyöristä luku 1,234 alaspäin kokonaislukuun.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Pyöristä luku 1,999 alaspäin kokonaislukuun.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Pyöristä luku 1,999 alaspäin kahteen desimaaliin.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
