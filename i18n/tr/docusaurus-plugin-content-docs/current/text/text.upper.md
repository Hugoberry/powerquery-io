---
title: Text.Upper
---

# Text.Upper


Tüm karakterleri büyük harfe çevirir.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

<code>text</code> içindeki tüm karakterlerin büyük harfe dönüştürülmesinin sonucu döndürür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").


## Examples

### Example #1 
&#34;aBcD&#34; ifadesinin büyük harfli sürümünü alır.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
