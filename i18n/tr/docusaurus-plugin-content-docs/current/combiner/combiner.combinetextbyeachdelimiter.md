---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Bir sınırlayıcılar dizisi kullanarak bir metin listesini birleştiren bir işlev döndürür.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Bir dizi sınırlayıcı kullanarak metin değerleri listesini tek bir metin değerinde birleştiren bir işlev döndürür.


## Examples

### Example #1 
Bir sınırlayıcı dizisi kullanarak bir metin değerleri listesini birleştirin.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
