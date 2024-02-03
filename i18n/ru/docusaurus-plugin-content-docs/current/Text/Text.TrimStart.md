---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Удаляет все начальные пробелы.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Возвращает результат удаления всех начальных пробелов из текстового значения <code>text</code>.


## Examples

### Example #1 
Удалить начальные пробелы из &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
