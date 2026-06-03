---
title: List.FindText
---

# List.FindText


Returns a list of values (including record fields) that contain the specified text.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Returns a list of the values from the list `list` which contained the value `text`.


## Examples

### Example #1
Find the text values in the list \{"a", "b", "ab"\} that match "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
