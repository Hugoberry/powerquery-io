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

`text` öğesinde bulunan `characters` listesindeki herhangi bir karakterin ilk konumunu döndürür. Döndürülecek oluşum konumunu belirtmek üzere isteğe bağlı `occurrence` parametresi kullanılabilir.


## Examples

### Example #1
"Merhaba Dünya!" metninde "M" veya "D" harfinin ilk konumunu bulur.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
"Merhaba Dünya!" metninde "M" veya "D" harfinin tüm konumlarını bulur.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
