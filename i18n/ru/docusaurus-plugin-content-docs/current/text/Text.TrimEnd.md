---
title: Text.TrimEnd
---

# Text.TrimEnd


Удаляет все конечные пробелы.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Возвращает результат удаления всех конечных пробелов из текстового значения <code>text</code>.


## Examples

### Example #1 
Удалить конечные пробелы из &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
