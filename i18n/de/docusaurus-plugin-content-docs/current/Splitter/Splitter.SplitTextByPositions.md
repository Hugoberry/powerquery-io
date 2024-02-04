---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Gibt eine Funktion zurück, die Text an den angegebenen Positionen in eine Liste mit Text aufteilt.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Gibt eine Funktion zurück, die Text an den angegebenen Positionen in eine Liste mit Text aufteilt.


## Examples

### Example #1 
Teilen Sie die Eingabe an den angegebenen Positionen auf, beginnend am Anfang der Eingabe.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Teilen Sie die Eingabe an den angegebenen Positionen auf, beginnend am Ende der Eingabe.
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
