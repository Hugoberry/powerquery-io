---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Azure қоймасындағы көрсетілген тіркелгіден табылған бөлімді қамтитын шарлау кестесін береді.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Azure сақтау қоймасынан URL, <code>account</code>, тіркелгісінде табылған әр контейнерге арналған жолды қамтитын навигация кестесін қайтарады. Әр жолда контейнердің BLOB нысандарына сілтеме бар. Келесі параметрлерді басқару үшін <code>options</code> көрсетілуі мүмкін:    <ul><li><code>BlockSize</code> : Деректер тұтынушысын күтуге дейінгі оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.</li><li><code>RequestSize</code> : Сервер үшін бір HTTP сұрауында оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests параметрі жадты пайдалану есебінен, параллель орындалатын сұраулар санын көрсету арқылы деректерді жылдамырақ жүктеп алуды қолдайды. Қажетті жад: (ConcurrentRequest \* RequestSize). Әдепкі мәні: 16.</li></ul>



## Category
Accessing data
