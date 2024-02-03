---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Değerin ilk konumunu döndürür (bulunmazsa -1).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

<code>text</code> içinde bulunan <code>substring</code> metin değerinin belirtilen oluşumunun konumunu döndürür.    Hangi oluşum konumunun döndürüleceğini belirtmek için isteğe bağlı bir <code>occurrence</code> parametresi kullanılabilir (varsayılan olarak ilk oluşumdur).    <code>substring</code> bulunmazsa -1 döndürür.      <div>        <code>comparer</code>, karşılaştırmayı denetlemek için kullanılan bir <code>Karşılaştırıcıdır</code>. Karşılaştırıcılar büyük/küçük harfe duyarlı olmayan veya kültüre ve bölgeye duyarlı karşılaştırmalar döndürür.      </div>      <div>        Aşağıdaki yerleşik karşılaştırıcılar formül dilinde kullanılabilir:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Tam bir sırasal karşılaştırma yapmak için kullanılır</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Tam bir büyük/küçük harfe duyarlı olmayan karşılaştırma yapmak için kullanılır</li>        <li> <code>Comparer.FromCulture</code>: Kültüre duyarlı bir karşılaştırma yapmak için kullanılır</li>      </ul>


## Examples

### Example #1 
&#34;Hello, World! Hello, World!&#34; metninde &#34;World&#34; ifadesinin ilk oluşum konumunu bulur.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
&#34;Dünya&#34;nın &#34;Merhaba Dünya! Merhaba Dünya!&#34; içindeki son yinelemesinin konumu alınır.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
