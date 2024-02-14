---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


Gibt eine Funktion zurück, die Text nach der angegebenen Länge wiederholt in eine Textliste aufteilt.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Remarks

Gibt eine Funktion zurück, die Text nach der angegebenen Länge wiederholt in eine Textliste aufteilt.


## Examples

### Example #1 
Teilen Sie die Eingabe wiederholt in Blöcke mit drei Zeichen auf, beginnend am Anfang der Eingabe.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Teilen Sie die Eingabe wiederholt in Blöcke mit drei Zeichen auf, beginnend am Ende der Eingabe.
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
