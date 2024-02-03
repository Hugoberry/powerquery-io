---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą pakartotinai po nurodyto ilgio.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą pakartotinai po nurodyto ilgio.


## Examples

### Example #1 
Pakartotinai išskaidykite įvestį į trijų simbolių segmentus pradėdami nuo įvesties pradžios.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Pakartotinai išskaidykite įvestį į trijų simbolių segmentus pradėdami nuo įvesties pabaigos.
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
