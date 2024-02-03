---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Tiek atgriezta funkcija, kas nodrošina teksta atkārtotu sadali atbilstoši norādītajai garuma vērtībai, izveidojot teksta vērtību sarakstu.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Tiek atgriezta funkcija, kas nodrošina teksta atkārtotu sadali atbilstoši norādītajai garuma vērtībai, izveidojot teksta vērtību sarakstu.


## Examples

### Example #1 
Atkārtoti sadalīt ievadi trīs rakstzīmju porcijās, sākot no ievades sākuma.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Atkārtoti sadalīt ievadi trīs rakstzīmju porcijās, sākot no ievades beigām.
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
