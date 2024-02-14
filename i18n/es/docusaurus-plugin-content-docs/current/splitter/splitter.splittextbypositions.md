---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


Devuelve una función que divide el texto en una lista de texto de cada posición especificada.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Devuelve una función que divide el texto en una lista de texto de cada posición especificada.


## Examples

### Example #1 
Divida la entrada en las posiciones especificadas, empezando desde el principio de la entrada.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Divida la entrada en las posiciones especificadas, empezando desde el final de la entrada.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
