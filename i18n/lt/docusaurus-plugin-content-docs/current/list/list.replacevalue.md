---
title: List.ReplaceValue
---

# List.ReplaceValue


Ieškomas nurodytos reikšmės sąrašas ir jis pakeičiamas.


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

Ieškomas sąrašas reikšmių, `list`, reikšmei `oldValue` ir kiekvienas atvejis pakeičiamas pakeitimo reikšme `newValue`.


## Examples

### Example #1
Pakeiskite visas sąrašo \{"a", "B", "a", "a"\} reikšmes „a“ į „A“.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
