---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Metnin belirtilen değerde sonlanıp sonlanmadığını gösterir.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Verilen <code>text</code> metninin belirtilen <code>substring</code> değeri ile bitip bitmediğini gösterir. Gösterge büyük/küçük harfe duyarlıdır.      <div>        <code>comparer</code>, karşılaştırmanın kontrol edilmesi için kullanılan bir <code>Karşılaştırıcıdır</code>. Karşılaştırıcılar, büyük/küçük harfe duyarlı olmayan veya kültüre ve yerel ayara duyarlı karşılaştırmaların sağlanması için kullanılabilir.      </div>      <div>        Aşağıdaki yerleşik karşılaştırıcılar formül dilinde kullanılabilir:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Tam sıralı karşılaştırma gerçekleştirilmesi için kullanılır</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Tam sıralı büyük/küçük harfe duyarlı olmayan karşılaştırma gerçekleştirilmesi için kullanılır</li>        <li> <code>Comparer.FromCulture</code>: Kültüre duyarlı karşılaştırma gerçekleştirilmesi için kullanılır</li>      </ul>


## Examples

### Example #1 
&#34;Hello, World&#34; metninin &#34;world&#34; ifadesi ile bitip bitmediğini denetler.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
&#34;Hello, World&#34; metninin &#34;World&#34; ifadesi ile bitip bitmediğini denetler.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
