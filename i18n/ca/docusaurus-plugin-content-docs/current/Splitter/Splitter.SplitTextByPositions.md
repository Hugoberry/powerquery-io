---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Retorna una funció que divideix el text en una llista de text a cada posició especificada.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Retorna una funció que divideix el text en una llista de text a cada posició especificada.


## Examples

### Example #1 
Divideix l&#39;entrada a les posicions especificades, començant pel principi de l&#39;entrada.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Divideix l&#39;entrada a les posicions especificades, començant pel final de l&#39;entrada.
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
