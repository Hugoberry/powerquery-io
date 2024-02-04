---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Gibt eine stichprobenbasierte Schätzung der Standardabweichung zurück.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

Gibt eine stichprobenbasierte Schätzung der Standardabweichung der Werte in der Liste "<code>numbersList</code>" zurück.    Ist "<code>numbersList</code>" eine Liste mit Zahlen, wird eine Zahl zurückgegeben.    Im Fall einer leeren Liste oder einer Liste mit Elementen, bei denen es sich nicht um Werte vom Typ <code>number</code> handelt, wird eine Ausnahme ausgelöst.


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
