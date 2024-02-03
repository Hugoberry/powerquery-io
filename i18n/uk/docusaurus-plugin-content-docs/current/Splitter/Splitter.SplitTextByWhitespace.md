---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Повертає функцію, яка розділяє текст на список тексту по пробілах.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Повертає функцію, яка розділяє текст на список тексту по пробілах.


## Examples

### Example #1 
Розділення вхідних даних пробілами. Лапки розглядаються як будь-який інший символ.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
