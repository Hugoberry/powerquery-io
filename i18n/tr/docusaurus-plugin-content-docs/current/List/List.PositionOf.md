---
title: List.PositionOf
---

# List.PositionOf


## Description

Bir listedeki bir değerin uzaklıklarını döndürür.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

<code>list</code> listesinde <code>value</code> değerinin göründüğü uzaklığı döndürür. Değer görünmüyorsa -1 döndürülür.    <code>occurrence</code> isteğe bağlı oluşum parametresi de belirtilebilir.<ul>   <li><code>occurrence</code>: Bildirilecek oluşum sayısı üst sınırı.</li></ul>


## Examples

### Example #1 
\{1, 2, 3} listesinde 3 değerinin göründüğü konumu bulur.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
