---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Көрсетілген ауытқуларға және ұзындықтарға сай мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Көрсетілген офсеттер мен ұзындықтарға сәйкес мәтінді мәтін тізіміне бөлетін функцияны қайтарады. Нөл ұзындығы барлық қалған енгізуді қосу керектігін көрсетеді.


## Examples

### Example #1 
Кірістің басынан бастап кірісті көрсетілген орын және ұзындық жұптары арқылы бөледі. Бұл мысалдағы ауқымдар қабаттасатынын ескеріңіз.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Кірісті кірістің соңынан бастап көрсетілген орын және ұзындық жұптарымен бөледі.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Енгізуді ұзындығы бекітілген пошталық индекске, кейін ұзындығы айнымалы қала атауына бөледі.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
