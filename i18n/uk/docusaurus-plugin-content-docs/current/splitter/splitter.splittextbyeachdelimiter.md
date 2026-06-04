---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


Повертає функцію, яка розділяє текст на список тексту в кожному вказаному роздільнику в певній послідовності.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Повертає функцію, яка розділяє текст на список тексту в кожному вказаному роздільнику в певній послідовності.


## Examples

### Example #1
Розділення вхідних даних комою, а потім крапкою з комою, починаючи з початку.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2
Розділення вхідних даних комою, а потім крапкою з комою, починаючи з кінця. Лапки розглядаються як будь-який інший символ.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
