---
title: List.Distinct
---

# List.Distinct


Gibt eine Liste mit Werten ohne Duplikate zurück.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Gibt eine Liste mit allen Werten aus der Liste "<code>list</code>" (aber ohne Duplikate) zurück. Ist die Liste leer, entsteht eine leere Liste.


## Examples

### Example #1 
Entfernt die Duplikate aus der Liste &#34;\{1, 1, 2, 3, 3, 3}&#34;.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
