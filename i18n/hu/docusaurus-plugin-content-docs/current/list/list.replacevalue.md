---
title: List.ReplaceValue
---

# List.ReplaceValue


Megkeresi a megadott értéket egy listán, és lecseréli.


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

Megkeresi az értékek `list` listáján a(z) `oldValue` értéket, és mindegyik előfordulását lecseréli a(z) `newValue` csereértékre.


## Examples

### Example #1
Az összes „a” érték lecserélése az \{"a", "B", "a", "a"\} listán az „A” értékre
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
