---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Повертає функцію, яка об’єднує список тексту за допомогою послідовності роздільників.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Повертає функцію, яка об’єднує список текстових значень в одне текстове значення за допомогою послідовності роздільників.


## Examples

### Example #1 
Об’єднайте список текстових значень за допомогою послідовності роздільників.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
