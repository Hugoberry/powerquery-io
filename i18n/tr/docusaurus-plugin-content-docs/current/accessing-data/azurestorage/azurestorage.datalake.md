---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Azure Data Lake Storage'dan belirtilen kapsayıcı ve alt klasörlerinde bulunan belgeleri içeren bir gezinti tablosu döndürür.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Bir Azure Data Lake Storage dosya sisteminden `endpoint` hesap URL'sinde belirtilen kapsayıcı ve alt klasörlerinde bulunan belgeleri içeren bir gezinti tablosu döndürür. Şu seçenekleri denetlemek için `options` belirtilebilir:

-   `BlockSize` : Veri tüketicisini beklemeden okunacak baytların sayısı. Varsayılan değer 4 MB'tır.
-   `RequestSize` : Sunucuya tek bir HTTP isteğinde okunması denenecek bayt sayısı. Varsayılan değer 4 MB'tır.
-   `ConcurrentRequests` : ConcurrentRequests seçeneği, bellek kullanımı karşılığında paralel olarak yapılacak isteklerin sayısı belirtilerek verilerin daha hızlı indirilmesini destekler. Gereken bellek (ConcurrentRequest \* RequestSize). Varsayılan değer 16'dır.
-   `HierarchicalNavigation` : Dosyaların ağaç benzeri bir dizin görünümünde veya düz bir listede döndürülüp döndürülmeyeceğini denetleyen mantıksal (true/false) değer. Varsayılan değer false.



## Category
Accessing data
