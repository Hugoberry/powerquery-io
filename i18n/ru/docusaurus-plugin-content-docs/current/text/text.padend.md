---
title: Text.PadEnd
---

# Text.PadEnd


Возвращает текст указанной длины путем заполнения символами конца заданного текста.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Возвращает значение <code>text</code>, дополненное символами до длины <code>count</code> посредством вставки пробелов в конце текстового значения <code>text</code>.    Для задания символа, который следует использовать для заполнения, можно указать необязательный символ <code>character</code>. Символом для заполнения по умолчанию является пробел.


## Examples

### Example #1 
Заполнить конец текстового значения так, чтобы в значении было 10 символов.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Заполнить конец текстового значения знаком &#34;|&#34; так, чтобы в значении было 10 символов.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
