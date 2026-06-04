---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Azure Data Lake Storage қоймасында көрсетілген контейнерде және оның қосалқы қалталарында табылған құжаттар бар шарлау кестесін қайтарады.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Azure Data Lake Storage файл жүйесінен `endpoint` тіркелгі URL мекенжайындағы көрсетілген контейнерде және оның қосалқы қалталарында табылған құжаттар бар навигация кестесін қайтарады. Келесі параметрлерді басқару үшін `options` көрсетілуі мүмкін:

-   `BlockSize` : Деректер тұтынушысын күтуге дейінгі оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.
-   `RequestSize` : Сервер үшін бір HTTP сұрауында оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.
-   `ConcurrentRequests` : ConcurrentRequests параметрі жадты пайдалану есебінен, параллель орындалатын сұраулар санын көрсету арқылы деректерді жылдамырақ жүктеп алуды қолдайды. Қажетті жад: (ConcurrentRequest \* RequestSize). Әдепкі мәні: 16.
-   `HierarchicalNavigation` : Файлдардың ағаш тәрізді каталог көрінісінде немесе тегіс тізімде қайтарылатынын басқаратын логикалық (шын/жалған) мән. Әдепкі мәні: жалған.



## Category
Accessing data
