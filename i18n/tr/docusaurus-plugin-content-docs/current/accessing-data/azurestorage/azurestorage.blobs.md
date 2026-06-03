---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Azure depolama kasasından belirtilen hesapta bulunan kapsayıcıları içeren bir gezinme tablosu döndürür.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Azure depolama kasasından, `account` hesap URL'sinde bulunan her bir kapsayıcı için bir satır içeren gezinme tablosu döndürür. Her satır, kapsayıcı bloblarının bir bağlantısını içerir. Şu seçenekleri denetlemek için `options` belirtilebilir:

-   `BlockSize` : Veri tüketicisini beklemeden okunacak baytların sayısı. Varsayılan değer 4 MB'tır.
-   `RequestSize` : Sunucuya tek bir HTTP isteğinde okunması denenecek bayt sayısı. Varsayılan değer 4 MB'tır.
-   `ConcurrentRequests` : ConcurrentRequests seçeneği, bellek kullanımı karşılığında paralel olarak yapılacak isteklerin sayısı belirtilerek verilerin daha hızlı indirilmesini destekler. Gereken bellek (ConcurrentRequest \* RequestSize). Varsayılan değer 16'dır.



## Category
Accessing data
