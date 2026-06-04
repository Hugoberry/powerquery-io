---
title: List.StandardDeviation
---

# List.StandardDeviation


Tiek atgriezta atbilstoši paraugam aprēķinātā standartnovirze.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Atgriež no parauga atkarīgu standartnovirzes novērtējumu vērtībām sarakstā `numbersList`. Ja `numbersList` ir skaitļu saraksts, tiek atgriezts skaitlis. Kļūda ir radusies tukšā sarakstā vai to vienumu sarakstā, kuru tips nav `number`.


## Examples

### Example #1
Iegūstiet skaitļu no 1 līdz 5 standartnovirzi.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
