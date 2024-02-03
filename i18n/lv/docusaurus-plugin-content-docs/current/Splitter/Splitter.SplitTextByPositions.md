---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši katrai norādītajai pozīcijai, izveidojot teksta vērtību sarakstu.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši katrai norādītajai pozīcijai, izveidojot teksta vērtību sarakstu.


## Examples

### Example #1 
Sadalīt ievadi norādītajās pozīcijās, sākot no ievades sākumu.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Sadalīt ievadi norādītajās pozīcijās, sākot no ievades beigām.
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
