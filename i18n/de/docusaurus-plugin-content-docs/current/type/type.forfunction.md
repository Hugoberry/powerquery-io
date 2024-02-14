---
title: Type.ForFunction
---

# Type.ForFunction


Gibt einen Typ zurück, der für Funktionen mit bestimmten Parameter- und Rückgabetypeinschränkungen steht.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Erstellt einen <code>Funktionstyp</code> aus <code>signature</code>, einen Datensatz von <code>ReturnType</code> und <code>Parameter</code> und <code>min</code>, die minimale Anzahl von Argumenten, die zum Aufrufen der Funktion erforderlich ist.


## Examples

### Example #1 
Erstellt den Typ für eine Funktion, die einen Zahlenparameter namens X verwendet und eine Zahl zurückgibt.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
