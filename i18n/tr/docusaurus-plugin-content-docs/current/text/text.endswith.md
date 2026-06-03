---
title: Text.EndsWith
---

# Text.EndsWith


Metnin belirtilen değerde sonlanıp sonlanmadığını gösterir.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Verilen `text` metninin belirtilen `substring` değeri ile bitip bitmediğini gösterir. Gösterge büyük/küçük harfe duyarlıdır.

`comparer`, karşılaştırmanın kontrol edilmesi için kullanılan bir `Karşılaştırıcıdır`. Karşılaştırıcılar, büyük/küçük harfe duyarlı olmayan veya kültüre ve yerel ayara duyarlı karşılaştırmaların sağlanması için kullanılabilir.

Aşağıdaki yerleşik karşılaştırıcılar formül dilinde kullanılabilir:

-   `Comparer.Ordinal`: Tam sıralı karşılaştırma gerçekleştirilmesi için kullanılır
-   `Comparer.OrdinalIgnoreCase`: Tam sıralı büyük/küçük harfe duyarlı olmayan karşılaştırma gerçekleştirilmesi için kullanılır
-   `Comparer.FromCulture`: Kültüre duyarlı karşılaştırma gerçekleştirilmesi için kullanılır


## Examples

### Example #1
"Hello, World" metninin "world" ifadesi ile bitip bitmediğini denetler.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
"Hello, World" metninin "World" ifadesi ile bitip bitmediğini denetler.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
