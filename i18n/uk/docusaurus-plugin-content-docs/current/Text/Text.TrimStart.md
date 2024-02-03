---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Вилучає всі початкові пробіли.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Повертає результат вилучення всіх початкових пробілів з текстового значення <code>text</code>.


## Examples

### Example #1 
Вилучити початкові пробіли з &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
