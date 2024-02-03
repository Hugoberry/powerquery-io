---
title: List.MinN
---

# List.MinN


## Description

Listedeki en küçük değerleri döndürür. Döndürülecek değer sayısı veya filtre koşulu belirtilebilir.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

<code>list</code> listesindeki en küçük değerleri döndürür.    <code>countOrCondition</code> parametresi döndürülecek değer sayısını veya filtre koşulunu belirtir. İsteğe bağlı <code>comparisonCriteria</code> parametresi, listedeki değerlerin nasıl karşılaştırılacağını belirtir. <ul>        <li> <code>list</code>: Değer listesi.</li>        <li> <code>countOrCondition</code>: Sayı belirtilirse en fazla <code>countOrCondition</code> öğeye sahip, artan sırada bir liste döndürülür. Koşul belirtilirse bu koşulu sağlayan tüm öğelerin listesi döndürülür. Öğe bu koşulu sağlamadığında diğer öğeler değerlendirilmez. Parametre null ise listedeki tek en küçük öğe döndürülür.</li><li><code>comparisonCriteria</code>: <i>[İsteğe bağlı]</i> Listedeki öğelerin nasıl karşılaştırılacağını belirlemek için isteğe bağlı bir <code>comparisonCriteria</code> değeri belirtilebilir. Bu parametre null ise varsayılan karşılaştırıcı kullanılır. </li></ul>


## Examples

### Example #1 
&lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt; listesinin en küçük 5 değerini bulur.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
