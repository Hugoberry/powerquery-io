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

Возвращает значение <code>text</code>, дополненное символами до длины <code>count</code> посредством вставки пробелов в начале текстового значения <code>text</code>.    Для задания символа, который следует использовать для заполнения, можно указать необязательный символ <code>character</code>. Символом для заполнения по умолчанию является пробел.


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
Заполнить начало текстового значения знаком &#34;|&#34; так, чтобы в значении было 10 символов.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
