---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


Belirtilen çıktı konumlarını kullanarak bir metin listesini birleştiren bir işlev döndürür.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Remarks

Belirtilen çıktı konumlarını kullanarak metin değerleri listesini tek bir metin değerinde birleştiren bir işlev döndürür.


## Examples

### Example #1 
Metin değerleri listesini çıktıda belirtilen konumlara yerleştirerek birleştirin.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
