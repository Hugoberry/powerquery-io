---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Повертає функцію, яка розділяє текст на список тексту відповідно до вказаного роздільника.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Повертає функцію, яка розділяє текст на список тексту відповідно до вказаного роздільника.


## Examples

### Example #1 
Розділення вхідних даних комою, без урахування ком у лапках.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
