---
title: Text.Select
---

# Text.Select


## Description

Дає змогу виділити всі екземпляри заданого символу або списку символів у вхідному текстовому значенні.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Повертає копію текстового значення "<code>text</code>", звідки вилучено всі символи, яких немає в наборі "<code>selectChars</code>".  


## Examples

### Example #1 
Виділяє в текстовому значенні всі символи в діапазоні від &#34;a&#34; до &#34;z&#34;.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
