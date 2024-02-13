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

Gibt die Schnittmenge der Listenwerte aus der Eingabeliste <code>lists</code> zurück. Ein optionaler Parameter (<code>equationCriteria</code>) kann angegeben werden.


## Examples

### Example #1 
Ermittelt die Schnittmenge der Listen &#34;\{1..5}&#34;, &#34;\{2..6}&#34; und &#34;\{3..7}&#34;.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
