---
title: Type.ForFunction
---

# Type.ForFunction


Returnează un tip care reprezintă funcţiile cu parametrul specific şi returnează restricţiile pentru tip.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Creează un `tip de funcție` din `signature`, o înregistrare de `ReturnType` și `Parameters` și `min`, numărul minim de argumente necesare pentru a invoca funcția.


## Examples

### Example #1
Creează tipul pentru o funcție care ia un parametru număr denumit X și returnează un număr.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
