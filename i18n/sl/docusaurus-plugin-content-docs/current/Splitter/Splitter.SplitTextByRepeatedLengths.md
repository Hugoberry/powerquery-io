---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Vrne funkcijo, ki večkrat razdeli besedilo v seznam besedila za navedeno dolžino.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Vrne funkcijo, ki večkrat razdeli besedilo v seznam besedila za navedeno dolžino.


## Examples

### Example #1 
Večkrat razdelite vnos v dele treh znakov, in to od začetka vnosa.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Večkrat razdelite vnos v dele treh znakov, ki se začne od konca vnosa.
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
