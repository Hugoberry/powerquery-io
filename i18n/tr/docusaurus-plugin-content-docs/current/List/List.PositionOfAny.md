---
title: List.PositionOfAny
---

# List.PositionOfAny


Bir listedeki bir değerin ilk uzaklığını döndürür.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

<code>values</code> listesindeki bir değerin ilk örneğinin <code>list</code> listesindeki uzaklığını döndürür. Hiçbir oluşum bulunmadıysa -1 döndürür.    <code>occurrence</code> isteğe bağlı oluşum parametresi de belirtilebilir.<ul>   <li><code>occurrence</code>: Döndürülebilecek oluşum sayısı üst sınırı.</li></ul>


## Examples

### Example #1 
\{1, 2, 3} listesinde 2 veya 3 değerinin göründüğü ilk konumu bulur.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
