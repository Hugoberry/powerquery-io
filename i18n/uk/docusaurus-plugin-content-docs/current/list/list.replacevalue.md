---
title: List.ReplaceValue
---

# List.ReplaceValue


Шукає у списку вказане значення та замінює його.


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

Шукає у списку значень, `list`, значення `oldValue` і замінює кожне його входження на значення заміни `newValue`.


## Examples

### Example #1
Замінити усі значення "a" у списку \{"a", "B", "a", "a"\} на "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
