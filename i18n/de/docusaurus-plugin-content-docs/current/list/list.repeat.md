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

Gibt eine Liste mit `count` Wiederholungen der ursprünglichen Liste (`list`) zurück.


## Examples

### Example #1
Erstellt eine Liste mit drei Wiederholungen von "\{1, 2\}".
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
