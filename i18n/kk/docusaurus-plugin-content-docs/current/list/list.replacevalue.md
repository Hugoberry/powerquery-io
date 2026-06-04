---
title: List.ReplaceValue
---

# List.ReplaceValue


Тізімде көрсетілген мәнді іздейді және оны ауыстырады.


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

`list` мәндер тізімінде `oldValue` мәнін іздейді және әр дананы `newValue` ауыстыру мәнімен ауыстырады.


## Examples

### Example #1
\{"a", "B", "a", "a"\} тізіміндегі барлық "a" мәндерін "A" мәнімен ауыстыру.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
