---
title: List.Max
---

# List.Max


Bir boş listenin en büyük veya varsayılan değerini döndürür.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Listedeki en büyük öğeyi veya liste boşsa isteğe bağlı varsayılan değeri döndürür.

-   `list`: Değerlerin listesi.
-   `default`: (İsteğe bağlı) Liste boşsa döndürülecek değer.
-   `comparisonCriteria`: (İsteğe bağlı) Değerler karşılaştırılmadan önce dönüştürmek için kullanılan bir işlev. Bu parametre `null` ise, değerler herhangi bir dönüşüm yapılmadan karşılaştırılır.
-   `includeNulls`: (İsteğe bağlı) Listedeki `null` değerlerinin maksimum öğeyi belirlemede dahil edilip edilmeyeceğini belirtir. Varsayılan değer `true`'dur.


## Examples

### Example #1
Belirtilen listede maksimum değeri bulun.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Belirtilen listede maksimum değeri bulun veya liste boşsa -1 değerini döndür.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Metin değerleri listesinde alfabetik olarak en sonda bulunan öğeyi bulun. Liste boşsa, "none" değerini döndür.
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Almanca tarih listesinden en son tarihi bulun. Liste boşsa, 1 Ocak 2000 tarihini döndür.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
