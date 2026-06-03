---
title: Text.PadStart
---

# Text.PadStart


Возвращает текст указанной длины путем заполнения символами начала заданного текста.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Возвращает значение `text`, дополненное символами до длины `count` посредством вставки пробелов в начале текстового значения `text`. Для задания символа, который следует использовать для заполнения, можно указать необязательный символ `character`. Символом для заполнения по умолчанию является пробел.


## Examples

### Example #1
Заполнить начало текстового значения так, чтобы в значении было 10 символов.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Заполнить начало текстового значения знаком "|" так, чтобы в значении было 10 символов.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
