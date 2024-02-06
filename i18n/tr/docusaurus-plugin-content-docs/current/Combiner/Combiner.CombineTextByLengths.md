---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


Belirtilen uzunlukları kullanarak bir metin listesini birleştiren bir işlev döndürür.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Remarks

Belirtilen uzunlukları kullanarak metin değerleri listesini tek bir metin değerinde birleştiren bir işlev döndürür.


## Examples

### Example #1 
Her giriş değerinden belirtilen sayıda karakteri çıkararak bir metin değerleri listesini birleştirin.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Sonucu şablon metniyle önceden doldurduktan sonra, belirtilen sayıda karakteri çıkararak bir metin değerleri listesini birleştirin.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
