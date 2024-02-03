---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Vraća funkciju koja deli tekst na listu teksta prema svakoj navedenoj dužini.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Vraća funkciju koja deli tekst na listu teksta prema svakoj navedenoj dužini.


## Examples

### Example #1 
Razdelite unos na prva dva znaka, a zatim sledeća tri, počevši od početka unosa.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Podelite unos na prva tri znaka, a zatim sledeća dva, počevši od kraja unosa.
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
