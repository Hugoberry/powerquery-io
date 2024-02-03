---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Әр көрсетілген ұзындық бойынша мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Әр көрсетілген ұзындық бойынша мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Examples

### Example #1 
Кірістің басынан бастап, кірісті алғашқы екі таңбаға, содан кейін келесі үш таңбаға бөледі.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Кірістің соңынан бастап, кірісті алғашқы үш таңбаға бөледі, содан кейін келесі екеуі болады.
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
