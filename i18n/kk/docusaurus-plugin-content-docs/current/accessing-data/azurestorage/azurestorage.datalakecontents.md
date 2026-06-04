---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Azure Data Lake Storage файлдық жүйесінен көрсетілген файл контентін қайтарады.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Azure Data Lake Storage файл жүйесінен `url` URL мекенжайында файл контентін қайтарады. Келесі параметрлерді басқару үшін `options` көрсетілуі мүмкін:

-   `BlockSize` : Деректер тұтынушысын күтуге дейінгі оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.
-   `RequestSize` : Сервер үшін бір HTTP сұрауында оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.
-   `ConcurrentRequests` : ConcurrentRequests параметрі жадты пайдалану есебінен, параллель орындалатын сұраулар санын көрсету арқылы деректерді жылдамырақ жүктеп алуды қолдайды. Қажетті жад: (ConcurrentRequest \* RequestSize). Әдепкі мәні: 16.



## Category
Accessing data
