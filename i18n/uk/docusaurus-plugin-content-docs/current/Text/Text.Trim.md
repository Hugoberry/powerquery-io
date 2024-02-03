---
title: Text.Trim
---

# Text.Trim


## Description

Вилучає всі початкові й кінцеві пробіли.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Повертає результат вилучення всіх початкових і кінцевих пробілів з текстового значення <code>text</code>.


## Examples

### Example #1 
Вилучити початкові й кінцеві пробіли з &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
