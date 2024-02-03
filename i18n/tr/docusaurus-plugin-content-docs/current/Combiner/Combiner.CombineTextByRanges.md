---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Belirtilen konum ve uzunlukları kullanarak bir metin listesini birleştiren bir işlev döndürür.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Belirtilen çıktı konumlarını ve uzunluklarını kullanarak metin değerleri listesini tek bir metin değerinde birleştiren bir işlev döndürür. Uzunluk değerinin null olarak belirlenmesi, metin değerinin tamamının çıktı değerine dahil edilmesi gerektiğini belirtir.


## Examples

### Example #1 
Belirtilen çıkış konumlarını ve uzunluklarını kullanarak metin değerlerinin listesini birleştirin.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
