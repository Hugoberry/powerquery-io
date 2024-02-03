---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą ties kiekviena nurodyta padėtimi.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą ties kiekviena nurodyta padėtimi.


## Examples

### Example #1 
Išskaidykite įvestį nurodytose padėtyse pradėdami nuo įvesties pradžios.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Išskaidykite įvestį nurodytose padėtyse pradėdami nuo įvesties pabaigos.
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
