---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Returnează un exemplu pe baza estimării deviaţiei standard.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Returnează un eșantion bazat pe estimarea deviației standard a valorilor din listă, <code>numbersList</code>.    Dacă <code>numbersList</code> este o listă de numere, se returnează un număr.    Se generează o excepție pentru o listă goală sau o listă de elemente care nu sunt de tipul <code>number</code>.


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
