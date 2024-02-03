---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

Belirtilen blob içeriğini bir Azure depolama kasasından döndürür.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

Azure depolama kasasından, <code>url</code> URL'sindeki blobun içeriğini döndürür. Şu seçenekleri denetlemek için <code>options</code> belirtilebilir:    <ul><li><code>BlockSize</code> : Veri t&#252;keticisini beklemeden okunacak baytların sayısı. Varsayılan değer 4 MB&#39;tır.</li><li><code>RequestSize</code> : Sunucuya tek bir HTTP isteğinde okunması denenecek bayt sayısı. Varsayılan değer 4 MB&#39;tır.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests se&#231;eneği, bellek kullanımı karşılığında paralel olarak yapılacak isteklerin sayısı belirtilerek verilerin daha hızlı indirilmesini destekler. Gereken bellek (ConcurrentRequest \* RequestSize). Varsayılan değer 16&#39;dır.</li></ul>



## Category
Accessing data
