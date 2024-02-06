---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


Gibt eine Funktion zurück, die eine Liste von Text unter Verwendung der angegebenen Positionen und Längen kombiniert.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Remarks

Gibt eine Funktion zurück, die eine Liste von Textwerten unter Verwendung der angegebenen Ausgabepositionen und -längen zu einem einzelnen Textwert kombiniert. Eine NULL-Länge gibt an, dass der gesamte Textwert eingeschlossen werden soll.


## Examples

### Example #1 
Kombinieren Sie eine Liste von Textwerten mithilfe der angegebenen Ausgabepositionen und -längen.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
