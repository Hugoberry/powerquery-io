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

Azure Data Lake Storage dosya sisteminden <code>url</code> URL'sindeki dosyanın içeriğini döndürür. Şu seçenekleri denetlemek için <code>options</code> belirtilebilir:    <ul><li><code>BlockSize</code> : Veri t&#252;keticisini beklemeden okunacak baytların sayısı. Varsayılan değer 4 MB&#39;tır.</li><li><code>RequestSize</code> : Sunucuya tek bir HTTP isteğinde okunması denenecek bayt sayısı. Varsayılan değer 4 MB&#39;tır.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests se&#231;eneği, bellek kullanımı karşılığında paralel olarak yapılacak isteklerin sayısı belirtilerek verilerin daha hızlı indirilmesini destekler. Gereken bellek (ConcurrentRequest \* RequestSize). Varsayılan değer 16&#39;dır.</li></ul>



## Category
Accessing data
