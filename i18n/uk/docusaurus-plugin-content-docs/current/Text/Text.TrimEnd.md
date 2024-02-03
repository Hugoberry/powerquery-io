---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Вилучає всі кінцеві пробіли.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Повертає результат вилучення всіх кінцевих пробілів з текстового значення <code>text</code>.


## Examples

### Example #1 
Вилучити кінцеві пробіли з &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
