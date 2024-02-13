---
title: List.Intersect
---

# List.Intersect


Retourneert het snijpunt van de lijstwaarden die in de invoer zijn gevonden.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retourneert het snijpunt van de lijstwaarden die in de invoerlijst <code>lists</code> zijn gevonden. Er kan een optionele parameter, <code>equationCriteria</code>, worden opgegeven.


## Examples

### Example #1 
Het snijpunt van de lijsten \{1..5}, \{2..6}, \{3..7} uitzoeken.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
