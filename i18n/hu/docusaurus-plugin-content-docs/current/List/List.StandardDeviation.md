---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

A szórásnak egy minta alapján megbecsült értékét adja vissza.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Mintán alapuló becslést ad a(z) <code>numbersList</code> listában lévő értékek szórására.    Ha a(z) <code>numbersList</code> egy számlista, számot ad vissza.    Kivétel történik üres listák vagy nem <code>number</code> típusú elemekből álló listák esetén.


## Examples

### Example #1 
Az 1 és 5 közötti számok szórásának meghatározása
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
