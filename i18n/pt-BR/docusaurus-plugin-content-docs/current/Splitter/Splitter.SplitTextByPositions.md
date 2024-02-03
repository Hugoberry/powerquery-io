---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Retorna uma função que divide o texto em uma lista de texto em cada posição especificada.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Retorna uma função que divide o texto em uma lista de texto em cada posição especificada.


## Examples

### Example #1 
Divida a entrada nas posições especificadas, começando do início da entrada.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Divida a entrada nas posições especificadas, começando do final da entrada.
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
