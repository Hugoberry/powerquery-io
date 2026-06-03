---
title: List.FindText
---

# List.FindText


傳回包含指定之文字的值清單 (包括記錄欄位)。


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

傳回清單 `list` 中包含值 `text` 的值清單。


## Examples

### Example #1
找出清單 \{"a", "b", "ab"\} 中符合 "a" 的文字值。
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
