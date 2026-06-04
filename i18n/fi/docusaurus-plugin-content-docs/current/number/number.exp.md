---
title: Number.Exp
---

# Number.Exp


Korottaa vakion e annettuun potenssiin.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Remarks

Palauttaa tuloksen vakion e korottamisesta potenssiin `number` (eksponenttifunktio).

-   `number`: `number`, jolle eksponenttifunktio lasketaan. Jos `number` on tyhjäarvo, `Number.Exp` palauttaa tyhjäarvon.


## Examples

### Example #1
Korota vakio e potenssiin 3.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
