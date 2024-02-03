---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Әр көрсетілген орында мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Әр көрсетілген орында мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Examples

### Example #1 
Кірістің басынан бастап кірісті көрсетілген орындарда бөледі.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Кірістің соңынан бастап кірісті көрсетілген орындарда бөледі.
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
