---
title: List.Mode
---

# List.Mode


Listedeki en sık değeri döndürür.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

`list` içinde en sık görünen öğeyi döndürür. Liste boşsa bir hata oluşur. Aynı en yüksek sıklıkta birden çok öğe görünürse, son öğe seçilir. Eşitlik testini kontrol etmek için isteğe bağlı bir karşılaştırma ölçütü değeri (`equationCriteria`) belirtilebilir.


## Examples

### Example #1
`{"A", 1, 2, 3, 3, 4, 5}` listesinde en sık görünen öğeyi bulur.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
`{"A", 1, 2, 3, 3, 4, 5, 5}` listesinde en sık görünen öğeyi bulur.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
