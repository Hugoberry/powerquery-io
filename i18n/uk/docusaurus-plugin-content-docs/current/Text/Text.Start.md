---
title: Text.Start
---

# Text.Start


## Description

Повертає початок тексту.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Повертає <code>count</code> перших символів з <code>text</code> як текстове значення.


## Examples

### Example #1 
Отримати 5 перших символів фрази &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
