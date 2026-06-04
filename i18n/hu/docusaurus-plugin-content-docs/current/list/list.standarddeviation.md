---
title: List.StandardDeviation
---

# List.StandardDeviation


A szórásnak egy minta alapján megbecsült értékét adja vissza.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Mintán alapuló becslést ad a(z) `numbersList` listában lévő értékek szórására. Ha a(z) `numbersList` egy számlista, számot ad vissza. Hibaüzenet jelenik meg, ha a lista üres, vagy az elemek típusa nem `szám`.


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
