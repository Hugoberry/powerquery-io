---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Belirtilen blob içeriğini bir Azure depolama kasasından döndürür.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Azure depolama kasasından, `url` URL'sindeki blobun içeriğini döndürür. Şu seçenekleri denetlemek için `options` belirtilebilir:

-   `BlockSize` : Veri tüketicisini beklemeden okunacak baytların sayısı. Varsayılan değer 4 MB'tır.
-   `RequestSize` : Sunucuya tek bir HTTP isteğinde okunması denenecek bayt sayısı. Varsayılan değer 4 MB'tır.
-   `ConcurrentRequests` : ConcurrentRequests seçeneği, bellek kullanımı karşılığında paralel olarak yapılacak isteklerin sayısı belirtilerek verilerin daha hızlı indirilmesini destekler. Gereken bellek (ConcurrentRequest \* RequestSize). Varsayılan değer 16'dır.



## Category
Accessing data
