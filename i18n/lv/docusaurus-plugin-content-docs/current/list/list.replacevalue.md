---
title: List.ReplaceValue
---

# List.ReplaceValue


Sarakstā tiek meklēta norādītā vērtība, un tā tiek aizstāta.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

Vērtību sarakstā `list` tiek meklēta vērtība `oldValue`, un katrs tās gadījums tiek aizstāts ar aizstājējvērtību `newValue`.


## Examples

### Example #1
Aizstājiet visas saraksta \{"a", "B", "a", "a"\} vērtības a ar vērtību A.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
