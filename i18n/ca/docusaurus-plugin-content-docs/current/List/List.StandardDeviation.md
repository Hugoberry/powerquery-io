---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Retorna una estimació basada en un exemple de la desviació estàndard.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Retorna una estimació basada en un exemple de la desviació estàndard dels valors de la llista, <code>numbersList</code>.    Si <code>numbersList</code> és una llista de nombres, es retorna un nombre.    Es produeix una excepció en una llista buida o una llista d'elements que no són del tipus <code>number</code>.


## Examples

### Example #1 
Troba la desviació estàndard dels nombres de l&#39;1 al 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
