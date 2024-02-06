---
title: List.Repeat
---

# List.Repeat


Gibt eine Liste mit der angegebenen Anzahl von Wiederholungen der ursprünglichen Liste zurück.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Gibt eine Liste mit <code>count</code> Wiederholungen der ursprünglichen Liste (<code>list</code>) zurück.


## Examples

### Example #1 
Erstellt eine Liste mit drei Wiederholungen von &#34;\{1, 2}&#34;.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
