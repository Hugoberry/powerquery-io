---
title: List.Modes
---

# List.Modes


Listedeki en sık değerin listesini döndürür.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

<code>list</code> listesinde en sık görünen öğeyi döndürür. Liste boşsa bir özel durum oluşur. Birden çok öğe aynı en yüksek sıklıkla görünüyorsa son öğe seçilir.    Eşitlik sınamasını denetlemek için isteğe bağlı <code>comparisonCriteria</code> değeri, <code>equationCriteria</code>, belirtilebilir. 


## Examples

### Example #1 
&lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; listesinde en sık görünen öğeleri bulur.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
