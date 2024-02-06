---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Listelenen herhangi bir karakterin metin değerindeki ilk konumunu döndürür (bulunmazsa -1).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

<code>text</code> öğesinde bulunan <code>characters</code> listesindeki herhangi bir karakterin ilk konumunu döndürür.    Döndürülecek oluşum konumunu belirtmek üzere isteğe bağlı <code>occurrence</code> parametresi kullanılabilir.


## Examples

### Example #1 
&#34;Merhaba Dünya!&#34; metninde &#34;M&#34; veya &#34;D&#34; harfinin ilk konumunu bulur.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
&#34;Merhaba Dünya!&#34; metninde &#34;M&#34; veya &#34;D&#34; harfinin tüm konumlarını bulur.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
