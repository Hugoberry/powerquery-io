---
title: List.FindText
---

# List.FindText


Повертає список значень (у тому числі поля запису), який містить указаний текст.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Повертає список значень зі списку `list`, який містив значення `text`.


## Examples

### Example #1
Знайти текстові значення у списку \{"a", "b", "ab"\}, які відповідають "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
