---
title: Type.ForFunction
---

# Type.ForFunction


Returnerer en type, der repræsenterer funktioner med definerede begrænsninger for parameter og returtype.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Opretter en <code>function type</code> ud fra <code>signature</code>, en post med <code>ReturnType</code> og <code>Parameters</code> og <code>min</code>, som er minimumantallet af argumenter, der kræves for at aktivere funktionen.


## Examples

### Example #1 
Opretter typen for en funktion, der tager et talparameter ved navn X og returnerer et tal.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
