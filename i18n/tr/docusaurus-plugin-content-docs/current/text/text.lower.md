---
title: Text.Lower
---

# Text.Lower


Tüm karakterleri küçük harfe çevirir.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

`text` içindeki tüm karakterlerin küçük harfe dönüştürülmesinin sonucu döndürür. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (ör "tr-TR").


## Examples

### Example #1
"AbCd" ifadesinin küçük harfli sürümünü alır.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
