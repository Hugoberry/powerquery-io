---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


Restituisce una funzione che suddivide il testo in un elenco di testo in base alla lunghezza specificata.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Restituisce una funzione che suddivide il testo in un elenco di testo in base alla lunghezza specificata.


## Examples

### Example #1 
Dividere l&#39;input nei primi due caratteri seguiti dai tre successivi, a partire dall&#39;inizio dell&#39;input.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Dividere l&#39;input nei primi tre caratteri seguiti dai due successivi, a partire dalla fine dell&#39;input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
