---
title: Text.Split
---

# Text.Split


## Description

Разбивает текст на список текстовых значений на основе указанного разделителя.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Возвращает список текстовых значений, полученных в результате разбиения текстового значения <code>text</code> на основе указанного разделителя <code>separator</code>.


## Examples

### Example #1 
Создать список из текстового значения &#34;Name|Address|PhoneNumber&#34;, разбитого с помощью разделителя &#34;|&#34;.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
