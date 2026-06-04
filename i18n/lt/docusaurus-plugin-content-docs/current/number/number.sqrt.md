---
title: Number.Sqrt
---

# Number.Sqrt


Pateikiama skaičiaus kvadratinė šaknis.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Pateikiama `number` kvadratinė šaknis. Jei `number` yra neapibrėžta, `Number.Sqrt` pateikia neapibrėžtą reikšmę. Jei tai neigiama reikšmė, pateikiama `Number.NaN` (Ne skaičius).


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
