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

<code>text</code> metin değerinin <code>substring</code> metin değeriyle başlaması halinde true döndürür.      <ul>        <li><code>text</code>: <i></i> Aranacak <code>metin</code> değeri</li>        <li><code>substring</code>: <i></i> <code>substring</code> içinde aranacak alt dize olan bir <code>metin</code> değeri</li>        <li><code>comparer</code>: <i>[İsteğe bağlı]</i> Karşılaştırmayı denetlemek üzere kullanılan bir <code>Karşılaştırıcı</code>. Örneğin, büyük/küçük harfe duyarlı olmayan aramalar gerçekleştirmek üzere <code>Comparer.OrdinalIgnoreCase</code> kullanılabilir</li>      </ul>      <div>        <code>comparer</code>, karşılaştırmayı denetlemek üzere kullanılan bir <code>Karşılaştırıcıdır</code>. Karşılaştırıcılar, büyük/küçük harfe duyarlı olmayan veya kültüre ve yerel ayara duyarlı karşılaştırmaların sağlanması için kullanılabilir.      </div>      <div>        Aşağıdaki yerleşik karşılaştırıcılar formül dilinde kullanılabilir:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Tam sıralı karşılaştırma gerçekleştirilmesi için kullanılır</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Tam sıralı, büyük/küçük harfe duyarlı olmayan karşılaştırma gerçekleştirilmesi için kullanılır</li>        <li> <code>Comparer.FromCulture</code>: Kültüre duyarlı karşılaştırma gerçekleştirilmesi için kullanılır</li>      </ul>


## Examples

### Example #1 
&#34;Hello, World&#34; metninin &#34;hello&#34; metni ile başlayıp başlamadığını denetler.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
&#34;Hello, World&#34; metninin &#34;Hello&#34; metni ile başlayıp başlamadığını denetler.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
