---
title: Text.RemoveRange
---

# Text.RemoveRange


Verilen uzaklıkta başlayan belirli sayıda karakteri kaldırır


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

`text` metin değerinin `offset` konumundaki tüm karakterler kaldırılmış şekilde kopyasını döndürür. Kaldırılacak karakter sayısını belirtmek üzere `count` isteğe bağlı parametresi kullanılabilir. `count` varsayılan değeri 1'dir. Konum değerleri 0'dan başlar.


## Examples

### Example #1
"ABEFC" metin değerinden 2 konumundaki 1 karakteri kaldırır.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
"ABEFC" metin değerinden 2 konumundan başlayarak iki karakteri kaldırır.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
