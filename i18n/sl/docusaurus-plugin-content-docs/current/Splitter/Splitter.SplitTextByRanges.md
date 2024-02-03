---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Vrne funkcijo, ki razdeli besedilo v seznam besedila glede na navedene odmike in dolžine.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Vrne funkcijo, ki razdeli besedilo v seznam besedila glede na navedene odmike in dolžine. Dolžina "null" označuje, da je treba vključiti vse preostale vnose.


## Examples

### Example #1 
Razdelite vnos glede na navedeni par položaj in dolžine, tako da začnete od začetka vnosa. Obsegi v tem primeru se prekriti.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Razdelite vnos glede na navedeni par položaj in dolžine, ki se začne od konca vnosa.
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
Razdelite vnos v poštno številko z nespremenljivo dolžino in nato ime mesta s spremenljivo dolžino.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
