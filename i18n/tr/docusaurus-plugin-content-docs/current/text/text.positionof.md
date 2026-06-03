---
title: Text.PositionOf
---

# Text.PositionOf


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


## Remarks

`text` içinde bulunan `substring` metin değerinin belirtilen oluşumunun konumunu döndürür. Hangi oluşum konumunun döndürüleceğini belirtmek için isteğe bağlı bir `occurrence` parametresi kullanılabilir (varsayılan olarak ilk oluşumdur). `substring` bulunmazsa -1 döndürür.

`comparer`, karşılaştırmayı denetlemek için kullanılan bir `Karşılaştırıcıdır`. Karşılaştırıcılar büyük/küçük harfe duyarlı olmayan veya kültüre ve bölgeye duyarlı karşılaştırmalar döndürür.

Aşağıdaki yerleşik karşılaştırıcılar formül dilinde kullanılabilir:

-   `Comparer.Ordinal`: Tam bir sırasal karşılaştırma yapmak için kullanılır
-   `Comparer.OrdinalIgnoreCase`: Tam bir büyük/küçük harfe duyarlı olmayan karşılaştırma yapmak için kullanılır
-   `Comparer.FromCulture`: Kültüre duyarlı bir karşılaştırma yapmak için kullanılır


## Examples

### Example #1
"Hello, World! Hello, World!" metninde "World" ifadesinin ilk oluşum konumunu bulur.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
“Merhaba, Dünya!” ifadesinde “Dünya” kelimesinin en son geçtiği yeri bul Merhaba, Dünya!”.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
