---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Vráti funkciu, ktorá rozdelí text do zoznamu textu podľa stanovených posunov a dĺžok.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Vráti funkciu, ktorá rozdelí text do zoznamu textu podľa stanovených posunov a dĺžok. Dĺžka null označuje, že by sa mal zahrnúť všetok zostávajúci vstup.


## Examples

### Example #1 
Rozdelí vstup podľa zadaných párov pozície a dĺžky, počnúc od začiatku vstupu. Majte na pamäti, že rozsahy v tomto príklade sa prekrývajú.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Rozdelí vstup podľa zadaných párov pozície a dĺžky počnúc od konca vstupu.
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
Rozdeľte vstup na PSČ s pevnou dĺžkou a za ním názov mesta s premenlivou dĺžkou.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
