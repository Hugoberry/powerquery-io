---
title: List.StandardDeviation
---

# List.StandardDeviation


Retorna una estimació basada en un exemple de la desviació estàndard.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Retorna una estimació basada en un exemple de la desviació estàndard dels valors de la llista, `numbersList`. Si `numbersList` és una llista de nombres, es retorna un nombre. S'ha produït un error en una llista buida o una llista d'elements que no són del tipus `number`.


## Examples

### Example #1
Troba la desviació estàndard dels nombres de l'1 al 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
