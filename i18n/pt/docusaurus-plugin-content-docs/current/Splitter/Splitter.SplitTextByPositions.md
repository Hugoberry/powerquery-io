---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Returns a function that splits text into a list of text at each specified position.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Returns a function that splits text into a list of text at each specified position.


## Examples

### Example #1 
Split the input at the specified positions, starting from the beginning of the input.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Split the input at the specified positions, starting from the end of the input.
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
