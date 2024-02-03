---
title: List.LastN
---

# List.LastN


## Description

Listedeki son değeri döndürür.  Döndürülecek değer sayısı veya belirleyici bir şart isteğe bağlı olarak belirtilebilir.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

<code>list</code> listesindeki son öğeyi döndürür. Liste boşsa bir özel durum oluşur. Bu işlev birden çok öğe veya filtre öğesini desteklemek üzere isteğe bağlı bir <code>countOrCondition</code> parametresini alır. <code>countOrCondition</code> üç yolla belirtilebilir: <ul>  <li>Sayı belirtilirse, bu sayı kadar öğe döndürülür. </li>  <li>Koşul belirtilirse, listenin sonundan başlayarak bu koşulu sağlayan tüm öğeler döndürülür. Tüm öğeler koşulu sağlamadığında, başka öğe değerlendirilmez. </li>  <li>Parametre null ise, listedeki son öğe döndürülür.</li> </ul>


## Examples

### Example #1 
\{3, 4, 5, -1, 7, 8, 2} listesinin son değerini bulur.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
\{3, 4, 5, -1, 7, 8, 2} listesinde 0&#39;dan büyük olan son değerleri bulur.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
