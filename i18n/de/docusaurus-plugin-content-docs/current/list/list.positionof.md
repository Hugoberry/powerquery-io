---
title: List.PositionOf
---

# List.PositionOf


Gibt die Offsets eines Werts in einer Liste zurück.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Gibt den Offset zurück, an dem der Wert "<code>value</code>" in der Liste "<code>list</code>" erscheint. Ist der Wert nicht vorhanden, wird "-1" zurückgegeben.    Ein optionaler occurrence-Parameter (<code>occurrence</code>) kann angegeben werden.<ul>   <li><code>occurrence</code>: Die maximale Anzahl der zu meldenden Vorkommen.</li></ul>


## Examples

### Example #1 
Ermittelt die Position in der Liste &#34;\{1, 2, 3}&#34;, an der der Wert 3 erscheint.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
