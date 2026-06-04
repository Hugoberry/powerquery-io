---
title: List.ReplaceValue
---

# List.ReplaceValue


Traži navedenu vrednost na listi i zamenjuje je.


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

Traži vrednost `oldValue` na listi vrednosti `list` i zamenjuje svako pojavljivanje vrednošću za zamenu `newValue`.


## Examples

### Example #1
Zamena svih vrednosti „a“ sa liste \{"a", "B", "a", "a"\} sa „A“.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
