---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši katrai norādītajai garuma vērtībai, izveidojot teksta vērtību sarakstu.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši katrai norādītajai garuma vērtībai, izveidojot teksta vērtību sarakstu.


## Examples

### Example #1 
Sadalīt ievadi pirmajās divās rakstzīmes, kam seko nākamās trīs rakstzīmes, sākot no ievades sākuma.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Sadalīt ievadi pirmajās trīs rakstzīmes, kam seko nākamās divas rakstzīmes, sākot no ievades beigām.
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
