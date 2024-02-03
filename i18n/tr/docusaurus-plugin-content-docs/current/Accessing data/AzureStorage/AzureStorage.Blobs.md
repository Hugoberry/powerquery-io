---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Azure depolama kasasından belirtilen hesapta bulunan kapsayıcıları içeren bir gezinme tablosu döndürür.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Azure depolama kasasından, <code>account</code> hesap URL'sinde bulunan her bir kapsayıcı için bir satır içeren gezinme tablosu döndürür. Her satır, kapsayıcı bloblarının bir bağlantısını içerir. Şu seçenekleri denetlemek için <code>options</code> belirtilebilir:    <ul><li><code>BlockSize</code> : Veri t&#252;keticisini beklemeden okunacak baytların sayısı. Varsayılan değer 4 MB&#39;tır.</li><li><code>RequestSize</code> : Sunucuya tek bir HTTP isteğinde okunması denenecek bayt sayısı. Varsayılan değer 4 MB&#39;tır.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests se&#231;eneği, bellek kullanımı karşılığında paralel olarak yapılacak isteklerin sayısı belirtilerek verilerin daha hızlı indirilmesini destekler. Gereken bellek (ConcurrentRequest \* RequestSize). Varsayılan değer 16&#39;dır.</li></ul>



## Category
Accessing data
