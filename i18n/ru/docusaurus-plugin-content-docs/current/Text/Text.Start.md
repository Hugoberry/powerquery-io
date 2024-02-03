---
title: Text.Start
---

# Text.Start


## Description

Возвращает начало текста.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Возвращает первые <code>count</code> символов из <code>text</code> как текстовое значение.


## Examples

### Example #1 
Получить первые 5 символов &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
