---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Entfernt in der Liste vorhandene Elemente aus &#34;list1&#34;.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Entfernt alle Vorkommen der angegebenen Werte in "<code>list2</code>" aus "<code>list1</code>". Sind die Werte aus "<code>list2</code>" in "<code>list1</code>" nicht vorhanden, wird die ursprüngliche Liste zurückgegeben.


## Examples

### Example #1 
Entfernt die Elemente in der Liste &#34;\{2, 4, 6}&#34; aus der Liste &#34;\{1, 2, 3, 4, 2, 5, 5}&#34;.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
