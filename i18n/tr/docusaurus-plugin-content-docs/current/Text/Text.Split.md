---
title: Text.Split
---

# Text.Split


Metni belirtilen sınırlayıcıya dayalı olarak bir metin değerleri listesine ayırır.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

<code>text</code> metin değerini <code>separator</code> belirtilen sınırlayıcısına dayalı olarak ayırmanın sonucu olan metin değerleri listesini döndürür.


## Examples

### Example #1 
&#34;|&#34; ile sınırlandırılmış metin değeri olan &#34;Name|Address|PhoneNumber&#34; öğesinden liste oluşturur.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
