---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Pateikiama skaičiaus kvadratinė šaknis.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Pateikiama <code>number</code> kvadratinė šaknis.    Jei <code>number</code> yra neapibrėžta, <code>Number.Sqrt</code> pateikia neapibrėžtą reikšmę. Jei tai neigiama reikšmė, pateikiama <code>Number.NaN</code> (Ne skaičius).


## Examples

### Example #1 
Raskite skaičiaus 625 kvadratinę šaknį.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Raskite skaičiaus 85 kvadratinę šaknį.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
