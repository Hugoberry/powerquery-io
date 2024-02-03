---
title: Record.HasFields
---

# Record.HasFields


## Description

Kaydın belirtilen alanlara sahip olup olmadığını gösterir.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

<code>record</code> kaydının <code>fields</code> içinde belirtilen alanları içerip içermediğini bir mantıksal değer döndürerek (doğru veya yanlış) gösterir.    Birden çok alan değeri liste kullanılarak belirtilebilir.


## Examples

### Example #1 
Kayıtta &#34;CustomerID&#34; alanının bulunup bulunmadığını denetler.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Kayıtta &#34;CustomerID&#34; ve &#34;Address&#34; alanlarının bulunup bulunmadığını denetler.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
