---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Azure қоймасындағы көрсетілген тіркелгіден табылған бөлімді қамтитын шарлау кестесін береді.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Azure сақтау қоймасынан URL, `account`, тіркелгісінде табылған әр контейнерге арналған жолды қамтитын навигация кестесін қайтарады. Әр жолда контейнердің BLOB нысандарына сілтеме бар. Келесі параметрлерді басқару үшін `options` көрсетілуі мүмкін:

-   `BlockSize` : Деректер тұтынушысын күтуге дейінгі оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.
-   `RequestSize` : Сервер үшін бір HTTP сұрауында оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.
-   `ConcurrentRequests` : ConcurrentRequests параметрі жадты пайдалану есебінен, параллель орындалатын сұраулар санын көрсету арқылы деректерді жылдамырақ жүктеп алуды қолдайды. Қажетті жад: (ConcurrentRequest \* RequestSize). Әдепкі мәні: 16.



## Category
Accessing data
