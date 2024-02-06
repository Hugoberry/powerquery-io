---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Azure Data Lake Storage&#39;dan belirtilen kapsayıcı ve alt klasörlerinde bulunan belgeleri içeren bir gezinti tablosu döndürür.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Bir Azure Data Lake Storage dosya sisteminden <code>endpoint</code> hesap URL'sinde belirtilen kapsayıcı ve alt klasörlerinde bulunan belgeleri içeren bir gezinti tablosu döndürür. Şu seçenekleri denetlemek için <code>options</code> belirtilebilir:    <ul><li><code>BlockSize</code> : Veri t&#252;keticisini beklemeden okunacak baytların sayısı. Varsayılan değer 4 MB&#39;tır.</li><li><code>RequestSize</code> : Sunucuya tek bir HTTP isteğinde okunması denenecek bayt sayısı. Varsayılan değer 4 MB&#39;tır.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests se&#231;eneği, bellek kullanımı karşılığında paralel olarak yapılacak isteklerin sayısı belirtilerek verilerin daha hızlı indirilmesini destekler. Gereken bellek (ConcurrentRequest \* RequestSize). Varsayılan değer 16&#39;dır.</li><li><code>HierarchicalNavigation</code> : Dosyaların ağa&#231; benzeri bir dizin g&#246;r&#252;n&#252;m&#252;nde veya d&#252;z bir listede d&#246;nd&#252;r&#252;l&#252;p d&#246;nd&#252;r&#252;lmeyeceğini denetleyen mantıksal (true/false) değer. Varsayılan değer false.</li></ul>



## Category
Accessing data
