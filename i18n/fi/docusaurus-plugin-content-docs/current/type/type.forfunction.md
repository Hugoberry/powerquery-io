---
title: Type.ForFunction
---

# Type.ForFunction


Palauttaa tyypin, joka edustaa funktioita, joilla on tiettyjä parametri- ja palautustyyppirajoituksia.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Luo kohteen `function type` kohteesta `signature`, tietueen `ReturnType` ja `Parameters` sekä kohteen `min`, joka on vähimmäismäärä funktion käynnistämiseen tarvittavia argumentteja.


## Examples

### Example #1
Luo funktiolle tyypin, joka ottaa lukuparametrin nimeltä X ja palauttaa luvun.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
