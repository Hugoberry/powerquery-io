---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Azure Data Lake Storage қоймасында көрсетілген контейнерде және оның қосалқы қалталарында табылған құжаттар бар шарлау кестесін қайтарады.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Azure Data Lake Storage файл жүйесінен <code>endpoint</code> тіркелгі URL мекенжайындағы көрсетілген контейнерде және оның қосалқы қалталарында табылған құжаттар бар навигация кестесін қайтарады. Келесі параметрлерді басқару үшін <code>options</code> көрсетілуі мүмкін:    <ul><li><code>BlockSize</code> : Деректер тұтынушысын күтуге дейінгі оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.</li><li><code>RequestSize</code> : Сервер үшін бір HTTP сұрауында оқылатын байттар саны. Әдепкі мәні: 4 Мбайт.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests параметрі жадты пайдалану есебінен, параллель орындалатын сұраулар санын көрсету арқылы деректерді жылдамырақ жүктеп алуды қолдайды. Қажетті жад: (ConcurrentRequest \* RequestSize). Әдепкі мәні: 16.</li><li><code>HierarchicalNavigation</code> : Файлдардың ағаш тәрізді каталог көрінісінде немесе тегіс тізімде қайтарылатынын басқаратын логикалық (шын/жалған) мән. Әдепкі мәні: жалған.</li></ul>



## Category
Accessing data
