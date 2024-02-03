---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Bir metin listesine belirtilen uzaklığa göre metin ayıran bir işlev döndürür.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Metni belirtilen uzaklıklara ve uzunluklara göre bölerek metin listesi oluşturan bir işlev döndürür. Uzunluk değerinin null olarak belirlenmesi, girişin kalan kısmının çıktı değerine dahil edilmesi gerektiğini belirtir.


## Examples

### Example #1 
Girişin başlangıcından başlayarak girişi belirtilen pozisyon ve uzunluk çiftlerine bölün. Bu örnekteki aralıkların çakıştığını unutmayın.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Girişin sonundan başlayarak girişi belirtilen pozisyon ve uzunluk çiftlerine bölün.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Girişi, sabit uzunlukta bir posta kodundan ve onu takip eden, değişken uzunlukta bir şehir adından oluşacak şekilde bölün.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
