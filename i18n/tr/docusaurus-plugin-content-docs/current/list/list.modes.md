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

`list` içinde en sık görünen öğeleri döndürür. Liste boşsa bir hata oluşur. Aynı en yüksek sıklıkta birden çok öğe görünürse, hepsi döndürülür. Eşitlik testini kontrol etmek için isteğe bağlı bir karşılaştırma ölçütü değeri (`equationCriteria`) belirtilebilir.


## Examples

### Example #1
`{"A", 1, 2, 3, 3, 4, 5, 5}` listesinde en sık görünen öğeleri bulur.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
