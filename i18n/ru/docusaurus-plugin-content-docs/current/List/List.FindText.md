---
title: List.FindText
---

# List.FindText


## Description

Возвращает список значений (включая поля записей), содержащих указанный текст.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Возвращает список значений из списка <code>list</code>, содержащих значение <code>text</code>.


## Examples

### Example #1 
Поиск текстовых значений в списке \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;}, совпадающих с &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
