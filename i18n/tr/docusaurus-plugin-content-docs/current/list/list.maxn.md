---
title: List.MaxN
---

# List.MaxN


Listedeki en büyük değerleri döndürür. Dönülecek değerlerin sayısı veya bir filtre koşulu belirtilmelidir.


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

Belirtilen listedeki maksimum değeri/değerleri döndürür. Satırlar sıralandıktan sonra, sonucu daha da filtrelemek için isteğe bağlı parametreler belirtilebilir.

-   `list`: Değerlerin listesi.
-   `countOrCondition`: Döndürülecek değerlerin sayısını veya bir filtre koşulunu belirtir. Bir sayı belirtilirse, azalan sırada en fazla `countOrCondition` öğeden oluşan bir liste döndürülür. Bir koşul belirtilirse, döndürülen liste koşulu karşılayan tüm öğeleri içerir.
-   `comparisonCriteria`: (İsteğe bağlı) Değerler karşılaştırılmadan önce dönüştürmek için kullanılan bir işlev. Bu parametre `null` ise, değerler herhangi bir dönüşüm yapılmadan karşılaştırılır.
-   `includeNulls`: (İsteğe bağlı) Listedeki `null` değerlerinin maksimum öğeyi belirlemede dahil edilip edilmeyeceğini belirtir. Varsayılan değer `true`'dur.


## Examples

### Example #1
Belirtilen listede en yüksek 5 değeri bulun.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
3 karakterden fazla olan kelimeleri bulun.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Alman tarih listesinden en son üç tarihi bulun.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
