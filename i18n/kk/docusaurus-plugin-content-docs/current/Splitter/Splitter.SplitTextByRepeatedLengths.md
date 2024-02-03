---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Көрсетілген ұзындықтан кейін қайта-қайта мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Көрсетілген ұзындықтан кейін қайта-қайта мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Examples

### Example #1 
Кірістің басынан бастап кірісті үш таңбалық бөліктерге қайта-қайта бөледі.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Кірістің соңынан бастап кірісті үш таңбалық бөліктерге қайта-қайта бөледі.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
