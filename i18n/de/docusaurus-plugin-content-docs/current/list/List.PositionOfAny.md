---
title: List.PositionOfAny
---

# List.PositionOfAny


Gibt den ersten Offset eines Werts in einer Liste zurück.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Gibt den Offset in der Liste "<code>list</code>" für das erste Vorkommen eines Werts in einer Liste (<code>values</code>) zurück. Wird kein Vorkommen gefunden, wird "-1" zurückgegeben.    Ein optionaler occurrence-Parameter (<code>occurrence</code>) kann angegeben werden.<ul>   <li><code>occurrence</code>: Die maximale Anzahl von Vorkommen, die zurückgegeben werden können.</li></ul>


## Examples

### Example #1 
Ermittelt die erste Position in der Liste &#34;\{1, 2, 3}&#34;, an der der Wert 2 oder 3 erscheint.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
