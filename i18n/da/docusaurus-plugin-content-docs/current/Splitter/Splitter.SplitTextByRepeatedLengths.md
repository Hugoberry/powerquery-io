---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Returnerer en funktion, der gentager opdeling af tekst på en liste efter den angivne længde.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Returnerer en funktion, der gentager opdeling af tekst på en liste efter den angivne længde.


## Examples

### Example #1 
Opdel gentagne gange input i segmenter af tre tegn, startende fra begyndelsen af input.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Opdel gentagne gange input i segmenter af tre tegn, startende fra slutningen af input.
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
