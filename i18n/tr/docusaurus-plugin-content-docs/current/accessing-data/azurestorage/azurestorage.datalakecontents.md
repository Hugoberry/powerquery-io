---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Bir Azure Data Lake Storage dosya sisteminden belirtilen dosyanın içeriğini döndürür.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Azure Data Lake Storage dosya sisteminden `url` URL'sindeki dosyanın içeriğini döndürür. Şu seçenekleri denetlemek için `options` belirtilebilir:

-   `BlockSize` : Veri tüketicisini beklemeden okunacak baytların sayısı. Varsayılan değer 4 MB'tır.
-   `RequestSize` : Sunucuya tek bir HTTP isteğinde okunması denenecek bayt sayısı. Varsayılan değer 4 MB'tır.
-   `ConcurrentRequests` : ConcurrentRequests seçeneği, bellek kullanımı karşılığında paralel olarak yapılacak isteklerin sayısı belirtilerek verilerin daha hızlı indirilmesini destekler. Gereken bellek (ConcurrentRequest \* RequestSize). Varsayılan değer 16'dır.



## Category
Accessing data
