---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


Restituisce una funzione che suddivide il testo in un elenco di testo in corrispondenza della posizione specificata.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Restituisce una funzione che suddivide il testo in un elenco di testo in corrispondenza della posizione specificata.


## Examples

### Example #1 
Dividere l&#39;input in corrispondenza delle posizioni specificate, a partire dall&#39;inizio dell&#39;input.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Dividere l&#39;input in corrispondenza delle posizioni specificate, a partire dalla fine dell&#39;input.
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
