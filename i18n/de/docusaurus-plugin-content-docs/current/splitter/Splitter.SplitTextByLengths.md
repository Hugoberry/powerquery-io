---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


Gibt eine Funktion zurück, die Text anhand der angegebenen Längenwerte in eine Liste mit Text aufteilt.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Gibt eine Funktion zurück, die Text anhand der angegebenen Längenwerte in eine Liste mit Text aufteilt.


## Examples

### Example #1 
Teilen Sie die Eingabe in die ersten zwei Zeichen auf, gefolgt von den nächsten drei Zeichen, beginnend am Anfang der Eingabe.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Teilen Sie die Eingabe in die ersten drei Zeichen auf, gefolgt von den nächsten zwei Zeichen, beginnend am Ende der Eingabe.
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
