---
title: Type.ForFunction
---

# Type.ForFunction


Returnerar en typ som representerar funktioner med särskilda parameter- och returtypsbegränsningar.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Skapar en <code>function type</code> från <code>signature</code>, en post med <code>ReturnType</code> och <code>Parameters</code>, och <code>min</code>, det minsta antalet argument som krävs för att anropa funktionen.


## Examples

### Example #1 
Skapar typen för en funktion som tar en talparameter med namnet X och returnerar ett tal.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
