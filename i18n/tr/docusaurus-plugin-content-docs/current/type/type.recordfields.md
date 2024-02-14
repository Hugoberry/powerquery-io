---
title: Type.RecordFields
---

# Type.RecordFields


Karşılık gelen bir ada ve değere sahip döndürülen kayıt türünün her alanıyla kayıt türünün alanlarını açıklayan bir kayıt döndürür.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Bir <code>type</code> kaydının alanlarını açıklayan bir kayıt döndürür. Döndürülen kayıt türünün her alanı, <code>[ Type = type, Optional = logical ]</code> kaydı türünde bir ada ve değere sahiptir.


## Examples

### Example #1 
Kaydın adını ve değerini bulun &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
