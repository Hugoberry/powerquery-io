---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Returnerer en funktion, der opdeler tekst på en liste med tekst ved alle de angivne længder.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Returnerer en funktion, der opdeler tekst på en liste med tekst ved alle de angivne længder.


## Examples

### Example #1 
Opdel input i de første to tegn efterfulgt af de næste tre, startende fra begyndelsen af input.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Opdel input i de første tre tegn efterfulgt af de næste to, startende fra slutningen af input.
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
