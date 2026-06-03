---
title: List.ReplaceValue
---

# List.ReplaceValue


Zoekt een lijst voor de opgegeven waarde en vervangt die waarde.


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

Zoekt een lijst met waarden, `list`, voor de waarde `oldValue` en vervangt elke instantie van die waarde door een de waarde `newValue`.


## Examples

### Example #1
Elke "a" in de lijst \{"a", "B", "a", "a"\} vervangen door een "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
