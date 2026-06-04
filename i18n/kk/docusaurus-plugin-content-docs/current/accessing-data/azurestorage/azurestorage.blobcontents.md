---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Көрсетілген BLOB контентін Azure сақтау орнынан қайтарады.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Azure сақтау қоймасынан `url` URL мекенжайында BLOB контентін қайтарады. Келесі параметрлерді басқару үшін `options` көрсетілуі мүмкін:

-   `BlockSize` : Деректер тұтынушысын күтуге дейінгі оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.
-   `RequestSize` : Сервер үшін бір HTTP сұрауында оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.
-   `ConcurrentRequests` : ConcurrentRequests параметрі жадты пайдалану есебінен, параллель орындалатын сұраулар санын көрсету арқылы деректерді жылдамырақ жүктеп алуды қолдайды. Қажетті жад: (ConcurrentRequest \* RequestSize). Әдепкі мәні: 16.



## Category
Accessing data
