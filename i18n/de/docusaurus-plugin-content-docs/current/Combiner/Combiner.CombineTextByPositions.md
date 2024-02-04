---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Gibt eine Funktion zurück, die eine Liste von Text unter Verwendung der angegebenen Ausgabepositionen kombiniert.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Gibt eine Funktion zurück, die eine Liste von Textwerten unter Verwendung der angegebenen Ausgabepositionen zu einem einzelnen Textwert kombiniert.


## Examples

### Example #1 
Kombinieren Sie eine Liste von Textwerten, indem Sie sie an den angegebenen Positionen in der Ausgabe platzieren.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
