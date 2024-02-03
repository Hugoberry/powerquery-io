---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Verilen uzaklıkta başlayan belirli sayıda karakteri kaldırır


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

<code>text</code> metin değerinin <code>offset</code> konumundaki tüm karakterler kaldırılmış şekilde kopyasını döndürür.    Kaldırılacak karakter sayısını belirtmek üzere <code>count</code> isteğe bağlı parametresi kullanılabilir. <code>count</code> varsayılan değeri 1'dir. Konum değerleri 0'dan başlar.


## Examples

### Example #1 
&#34;ABEFC&#34; metin değerinden 2 konumundaki 1 karakteri kaldırır.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
&#34;ABEFC&#34; metin değerinden 2 konumundan başlayarak iki karakteri kaldırır.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
