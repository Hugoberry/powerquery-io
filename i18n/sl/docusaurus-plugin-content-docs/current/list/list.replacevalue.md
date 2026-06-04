---
title: List.ReplaceValue
---

# List.ReplaceValue


Na seznamu poišče navedeno vrednost in jo zamenja.


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

Na seznamu vrednosti, `list`, poišče vrednost `oldValue` in zamenja vsako pojavitev z nadomestno vrednostjo `newValue`.


## Examples

### Example #1
Zamenjajte vse vrednosti"a"na seznamu \{"a", "B", "a", "a"\} z"A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
