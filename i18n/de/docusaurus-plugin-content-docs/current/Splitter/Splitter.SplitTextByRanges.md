---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Gibt eine Funktion zurück, die Text auf der Grundlage der angegebenen Offset- und Längenwerte in eine Liste mit Text aufteilt.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Gibt eine Funktion zurück, die Text entsprechend den angegebenen Offsets und Längen in eine Liste von Texten aufteilt. Eine NULL-Länge gibt an, dass alle verbleibenden Eingaben eingeschlossen werden sollen.


## Examples

### Example #1 
Teilen Sie die Eingabe durch die angegebenen Positions- und Längenpaare auf, beginnend am Anfang der Eingabe. Beachten Sie, dass sich die Bereiche in diesem Beispiel überlappen.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Teilen Sie die Eingabe durch die angegebenen Positions- und Längenpaare auf, beginnend am Ende der Eingabe.
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
Teilen Sie die Eingabe in eine Postleitzahl mit fester Länge auf, gefolgt von einem Ortsnamen mit variabler Länge.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
