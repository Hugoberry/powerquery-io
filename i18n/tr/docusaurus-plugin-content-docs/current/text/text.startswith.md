---
title: Text.StartsWith
---

# Text.StartsWith


Metnin belirtilen değerle başlayıp başlamadığını gösterir.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Metin değeri `text`, metin değeri `substring` ile başlıyorsa true döndürür.

-   `text`: Aranacak `metin` değeri.
-   `substring`: `text` içinde aranacak alt dize olan bir `metin` değeri.
-   `comparer`: *(İsteğe bağlı)* Karşılaştırmayı denetlemek için `Comparer` kullanılır. Örneğin, `Comparer.OrdinalIgnoreCase` büyük/küçük harfe duyarlı olmayan arama gerçekleştirmek için kullanılır.

`comparer` karşılaştırmayı kontrol etmek için kullanılan bir `Comparer`. Karşılaştırıcılar büyük/küçük harfe duyarlı olmayan veya kültür ve yerel ayarlara duyarlı karşılaştırmalar sağlamak için kullanılabilir.

Formül dilinde şu yerleşik karşılaştırıcılar bulunur:

-   `Comparer.Ordinal`: Tam sıralı karşılaştırma gerçekleştirmek için kullanılır.
-   `Comparer.OrdinalIgnoreCase`: Büyük/küçük harfe duyarlı olmayan tam sıralı karşılaştırma gerçekleştirmek için kullanılır.
-   `Comparer.FromCulture`: Kültüre duyarlı bir karşılaştırma gerçekleştirmek için kullanılır.


## Examples

### Example #1
"Hello, World" metninin "hello" metni ile başlayıp başlamadığını denetler.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
"Hello, World" metninin "Hello" metni ile başlayıp başlamadığını denetler.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Durumu yok sayarak, "Hello, World" metninin "hello" metniyle başlayıp başlamadığını kontrol edin.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
