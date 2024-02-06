---
title: List.MaxN
---

# List.MaxN


Listedeki en büyük değerleri döndürür. Döndürülecek değer sayısı veya filtre koşulu belirtilmelidir.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

<code>list</code> listesindeki en büyük değerleri döndürür.    Satırlar sıralandıktan sonra sonucu daha fazla filtrelemek için isteğe bağlı parametreler belirtilebilir. İsteğe bağlı <code>countOrCondition</code> parametresi döndürülecek değer sayısını veya filtre koşulunu belirtir. İsteğe bağlı <code>comparisonCriteria</code> parametresi, listedeki değerlerin nasıl karşılaştırılacağını belirtir. <ul>        <li> <code>list</code>: Değer listesi.</li>        <li> <code>countOrCondition</code>: Sayı belirtilirse en fazla <code>countOrCondition</code> öğeye sahip, artan sırada bir liste döndürülür. Koşul belirtilirse bu koşulu sağlayan tüm öğelerin listesi döndürülür. Öğe koşulu sağlamadığında diğer öğeler değerlendirilmez.</li><li><code>comparisonCriteria</code>: <i>[İsteğe bağlı]</i> Listedeki öğelerin nasıl karşılaştırılacağını belirlemek için isteğe bağlı bir <code>comparisonCriteria</code> değeri belirtilebilir. Bu parametre null ise varsayılan karşılaştırıcı kullanılır. </li></ul>



## Category
List.Ordering
