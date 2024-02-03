---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Pateikiamas imtimi pagrįstas standartinio nuokrypio įvertinimas.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Pateikiamas pavyzdžiu pagrįstas sąraše <code>numbersList</code> esančių reikšmių standartinio nuokrypio įvertinimas.    Jei <code>numbersList</code> yra skaičių sąrašas, pateikiamas skaičius.    Išimtis pateikiama tuščiame sąraše arba elementų, kurių tipas ne <code>number</code>, sąraše.


## Examples

### Example #1 
Raskite standartinį skaičių nuo 1 iki 5 nuokrypį.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
