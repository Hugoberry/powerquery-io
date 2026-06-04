---
title: List.StandardDeviation
---

# List.StandardDeviation


Pateikiamas imtimi pagrįstas standartinio nuokrypio įvertinimas.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Pateikiamas pavyzdžiu pagrįstas sąraše `numbersList` esančių reikšmių standartinio nuokrypio įvertinimas. Jei `numbersList` yra skaičių sąrašas, pateikiamas skaičius. Klaida pateikiama tuščiame sąraše arba elementų, kurių tipas ne `number`, sąraše.


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
