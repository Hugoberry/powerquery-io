---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Tiek atgriezta atbilstoši paraugam aprēķinātā standartnovirze.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Atgriež no parauga atkarīgu novērtējumu par vērtību standarta novirzi sarakstā <code>numbersList</code>.    Ja <code>numbersList</code> ir skaitļu saraksts, tiek atgriezts skaitlis.    Ja saraksts ir tukšs vai ja saraksta vienumu tips nav <code>number</code>, tiek parādīts izņēmums.


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
