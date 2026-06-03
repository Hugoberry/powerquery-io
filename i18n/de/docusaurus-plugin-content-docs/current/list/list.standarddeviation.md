---
title: List.StandardDeviation
---

# List.StandardDeviation


Gibt eine stichprobenbasierte Schätzung der Standardabweichung zurück.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Gibt eine stichprobenbasierte Schätzung der Standardabweichung der Werte in der Liste „`numbersList`“ zurück. Ist „`numbersList`“ eine Liste mit Zahlen, wird eine Zahl zurückgegeben. Bei einer leeren Liste oder einer Liste mit Elementen, die nicht vom Typ `Nummer` sind, wird ein Fehler ausgelöst.


## Examples

### Example #1
Ermittelt die Standardabweichung der Zahlen 1 bis 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
