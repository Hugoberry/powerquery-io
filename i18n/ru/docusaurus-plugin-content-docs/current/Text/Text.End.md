---
title: Text.End
---

# Text.End


## Description

Возвращает последние символы текста.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Возвращает значение <code>text</code>, представляющее собой последние <code>count</code> символов значения <code>text</code> типа <code>text</code>.


## Examples

### Example #1 
Получить последние 5 символов строки &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
