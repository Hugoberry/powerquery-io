---
title: List.ReplaceValue
---

# List.ReplaceValue


Söker i en lista efter angivet värde och ersätter det.


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

Söker i en lista med värden, `list`, efter värdet `oldValue` och ersätter varje förekomst med ersättningsvärdet `newValue`.


## Examples

### Example #1
Ersätt alla "a"-värden i listan \{"a", "B", "a", "a"\} med "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
