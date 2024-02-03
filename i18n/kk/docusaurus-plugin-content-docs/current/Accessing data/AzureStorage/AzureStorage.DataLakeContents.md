---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Azure Data Lake Storage файлдық жүйесінен көрсетілген файл контентін қайтарады.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Azure Data Lake Storage файл жүйесінен <code>url</code> URL мекенжайында файл контентін қайтарады. Келесі параметрлерді басқару үшін <code>options</code> көрсетілуі мүмкін:    <ul><li><code>BlockSize</code> : Деректер тұтынушысын күтуге дейінгі оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.</li><li><code>RequestSize</code> : Сервер үшін бір HTTP сұрауында оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests параметрі жадты пайдалану есебінен, параллель орындалатын сұраулар санын көрсету арқылы деректерді жылдамырақ жүктеп алуды қолдайды. Қажетті жад: (ConcurrentRequest \* RequestSize). Әдепкі мәні: 16.</li></ul>



## Category
Accessing data
