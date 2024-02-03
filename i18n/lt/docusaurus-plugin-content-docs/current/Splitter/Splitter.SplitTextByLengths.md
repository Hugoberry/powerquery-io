---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą pagal kiekvieną nurodytą ilgį.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą pagal kiekvieną nurodytą ilgį.


## Examples

### Example #1 
Išskaidykite įvestį į pirmus du simbolius, po kurių seka kiti trys, pradėdami nuo įvesties pradžios.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Išskaidykite įvestį į pirmus tris simbolius, po kurių seka kiti du, pradėdami nuo įvesties pabaigos.
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
