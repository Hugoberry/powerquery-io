---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Повертає функцію, яка розділяє текст на список тексту в будь-якому із вказаних роздільників.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Повертає функцію, яка розділяє текст на список тексту в будь-якому із вказаних роздільників.


## Examples

### Example #1 
Розділення вхідних даних комою або крапкою з комою, починаючи з початку, без урахування лапок і роздільників у лапках.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Розділення вхідних даних комою або крапкою з комою, починаючи з кінця, без урахування лапок і роздільників у лапках.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
