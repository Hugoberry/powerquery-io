---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Mengembalikan fungsi yang memisahkan teks kepada senarai teks pada setiap kedudukan yang ditentukan.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Mengembalikan fungsi yang memisahkan teks kepada senarai teks pada setiap kedudukan yang ditentukan.


## Examples

### Example #1 
Pisahkan input pada kedudukan yang ditentukan, bermula dari permulaan input.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Pisahkan input pada kedudukan yang ditentukan, bermula dari hujung input.
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
