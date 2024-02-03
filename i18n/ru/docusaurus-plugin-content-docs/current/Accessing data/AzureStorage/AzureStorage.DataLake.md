---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Возвращает таблицу навигации, содержащую документы, обнаруженные в указанном контейнере в Azure Data Lake Storage и его подпапках.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Возвращает таблицу навигации, содержащую документы, обнаруженные в указанном контейнере и его подпапках по URL-адресу учетной записи <code>endpoint</code> из файловой системы Azure Data Lake Storage. Вы можете указать <code>options</code> для управления следующими параметрами:    <ul><li><code>BlockSize</code> : Число байт, считываемых перед ожиданием потребителя данных. Значение по умолчанию&#160;— 4&#160;МБ.</li><li><code>RequestSize</code> : Число байт, которое пытается считать один HTTP-запрос к серверу. Значение по умолчанию&#160;— 4&#160;МБ.</li><li><code>ConcurrentRequests</code> : Параметр ConcurrentRequests поддерживает ускоренное скачивание данных, позволяя указать число параллельно выполняемых запросов за счет использования памяти. Требуемый объем памяти: ConcurrentRequest (Число параллельных запросов)&#160;\* RequestSize (Размер запроса). Значение по умолчанию&#160;— 16.</li><li><code>HierarchicalNavigation</code> : Логическое значение (true или false), определяющее вид возвращаемых файлов: древовидное представление каталогов или плоский список. Значение по умолчанию&#160;— false.</li></ul>



## Category
Accessing data
