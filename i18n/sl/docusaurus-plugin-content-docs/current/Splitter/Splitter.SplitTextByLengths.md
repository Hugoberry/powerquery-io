---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Vrne funkcijo, ki razdeli besedilo v seznam besedila za vsako navedeno dolžino.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Vrne funkcijo, ki razdeli besedilo v seznam besedila za vsako navedeno dolžino.


## Examples

### Example #1 
Razdelite vnos v prva dva znaka, ki mu sledita naslednja tri znaka, in začnite od začetka vnosa.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Razdelite vnos v prve tri znake, ki jim sledita naslednja dva znaka, in začnite od konca vnosa.
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
