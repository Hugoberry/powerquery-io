---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

Көрсетілген BLOB контентін Azure сақтау орнынан қайтарады.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

Azure сақтау қоймасынан <code>url</code> URL мекенжайында BLOB контентін қайтарады. Келесі параметрлерді басқару үшін <code>options</code> көрсетілуі мүмкін:    <ul><li><code>BlockSize</code> : Деректер тұтынушысын күтуге дейінгі оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.</li><li><code>RequestSize</code> : Сервер үшін бір HTTP сұрауында оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests параметрі жадты пайдалану есебінен, параллель орындалатын сұраулар санын көрсету арқылы деректерді жылдамырақ жүктеп алуды қолдайды. Қажетті жад: (ConcurrentRequest \* RequestSize). Әдепкі мәні: 16.</li></ul>



## Category
Accessing data
