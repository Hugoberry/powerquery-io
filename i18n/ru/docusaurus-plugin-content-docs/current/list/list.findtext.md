---
title: List.FindText
---

# List.FindText


Возвращает список значений (включая поля записей), содержащих указанный текст.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Возвращает список значений из списка `list`, содержащих значение `text`.


## Examples

### Example #1
Поиск текстовых значений в списке \{"a", "b", "ab"\}, совпадающих с "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
