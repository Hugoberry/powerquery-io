---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Vrne funkcijo, ki razdeli besedilo v seznam besedila na vsakem navedenem položaju.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Vrne funkcijo, ki razdeli besedilo v seznam besedila na vsakem navedenem položaju.


## Examples

### Example #1 
Razdelite vnos na navedenih mestih tako, da začnete od začetka vnosa.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Razdelite vnos na navedenih mestih tako, da začnete od konca vnosa.
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
