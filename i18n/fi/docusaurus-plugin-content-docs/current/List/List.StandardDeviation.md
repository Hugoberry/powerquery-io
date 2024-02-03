---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Palauttaa näytteeseen perustuvan arvion keskihajonnasta.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Palauttaa näytteeseen perustuvan arvion luettelon <code>numbersList</code> arvojen keskihajonnasta.    Jos <code>numbersList</code> on lukuluettelo, palautetaan luku.    Poikkeus aiheutuu, kun kohdataan tyhjä luettelo tai luettelo kohteita, joiden tyyppi ei ole <code>number</code>.


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
