---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


Retorna una funció que divideix el text en una llista de text a cada posició especificada.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Retorna una funció que divideix el text en una llista de text a cada posició especificada.


## Examples

### Example #1
Divideix l'entrada a les posicions especificades, començant pel principi de l'entrada.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2
Divideix l'entrada a les posicions especificades, començant pel final de l'entrada.
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
