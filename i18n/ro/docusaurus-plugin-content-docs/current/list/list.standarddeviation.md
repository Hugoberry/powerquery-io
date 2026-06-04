---
title: List.StandardDeviation
---

# List.StandardDeviation


Returnează un exemplu pe baza estimării deviaţiei standard.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Returnează un eșantion bazat pe estimarea deviației standard a valorilor din listă, `numbersList`. Dacă `numbersList` este o listă de numere, se returnează un număr. Se generează o eroare pentru o listă goală sau o listă de elemente care nu sunt de tipul `number`.


## Examples

### Example #1
Găsiţi deviaţia standard a numerelor de la 1 la 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
