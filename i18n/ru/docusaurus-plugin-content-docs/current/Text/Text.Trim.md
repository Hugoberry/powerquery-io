---
title: Text.Trim
---

# Text.Trim


## Description

Удаляет все начальные и конечные пробелы.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Возвращает результат удаления всех начальных и конечных пробелов из текстового значения <code>text</code>.


## Examples

### Example #1 
Удалить начальные и конечные пробелы из &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
