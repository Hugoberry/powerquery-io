---
title: List.StandardDeviation
---

# List.StandardDeviation


Palauttaa näytteeseen perustuvan arvion keskihajonnasta.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Palauttaa näytteeseen perustuvan arvion luettelon `numbersList` arvojen keskihajonnasta. Jos `numbersList` on lukuluettelo, palautetaan luku. Virhe luodaan tyhjälle luettelolle tai kohteiden luettelolle, jonka tyyppi ei ole `number`.


## Examples

### Example #1
Selvitä lukujen 1–5 keskihajonta.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
