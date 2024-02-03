---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Devolve unha función que divide texto nunha lista de texto en cada posición especificada.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Devolve unha función que divide texto nunha lista de texto en cada posición especificada.


## Examples

### Example #1 
Divide a entrada nas posicións especificadas, comezando dende o principio da entrada.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Divide a entrada nas posicións especificadas, comezando desde o final da entrada.
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
