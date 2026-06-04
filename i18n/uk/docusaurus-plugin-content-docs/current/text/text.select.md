---
title: Text.Select
---

# Text.Select


Дає змогу виділити всі екземпляри заданого символу або списку символів у вхідному текстовому значенні.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Повертає копію текстового значення "`text`", звідки вилучено всі символи, яких немає в наборі "`selectChars`".


## Examples

### Example #1
Виділяє в текстовому значенні всі символи в діапазоні від "a" до "z".
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
