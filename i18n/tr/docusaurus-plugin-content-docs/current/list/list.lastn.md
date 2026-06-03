---
title: List.LastN
---

# List.LastN


Belirtilen listedeki son öğe veya öğelerin listesini döndürür. Döndürülecek değer sayısı veya belirleyici bir şart isteğe bağlı olarak belirtilebilir.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Belirtilen listedeki son öğe veya öğelerin listesini döndürür.

-   `list`: İncelenecek liste. Liste boşsa, boş bir liste döndürülür.
-   `countOrCondition`: (İsteğe bağlı) Birden çok öğe toplama veya öğeleri filtreleme desteği sağlar. Bu parametre isteğe bağlı olarak listelenmiş olsa da, bu değer sağlanmamışsa veya `null` ise bir hata oluşur. Bu parametre iki şekilde belirtilebilir:
    -   Bir sayı belirtilirse, en fazla o kadar öğe döndürülür.
    -   Bir koşul belirtilirse, listenin sonundan başlayarak koşulu karşılayan tüm öğeler döndürülür. Bir öğe koşulu karşılamazsa, başka öğe değerlendirilmez.


## Examples

### Example #1
\{3, 4, 5, -1, 7, 8, 2\} listesinin son değerini bulur.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
\{3, 4, 5, -1, 7, 8, 2\} listesinde 0'dan büyük olan son değerleri bulur.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
