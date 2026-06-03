---
title: List.Intersect
---

# List.Intersect


Gibt die Schnittmenge der Listenwerte aus der Eingabe zurück.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Gibt die Schnittmenge der Listenwerte aus der Eingabeliste `lists` zurück. Ein optionaler Parameter (`equationCriteria`) kann angegeben werden.


## Examples

### Example #1
Ermittelt die Schnittmenge der Listen "\{1..5\}", "\{2..6\}" und "\{3..7\}".
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
