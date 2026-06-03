---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Возвращает содержимое указанного файла из файловой системы Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Возвращает содержимое файла по URL-адресу `url` из файловой системы Azure Data Lake Storage. Вы можете указать `options` для управления следующими параметрами:

-   `BlockSize` : Число байт, считываемых перед ожиданием потребителя данных. Значение по умолчанию — 4 МБ.
-   `RequestSize` : Число байт, которое пытается считать один HTTP-запрос к серверу. Значение по умолчанию — 4 МБ.
-   `ConcurrentRequests` : Параметр ConcurrentRequests поддерживает ускоренное скачивание данных, позволяя указать число параллельно выполняемых запросов за счет использования памяти. Требуемый объем памяти: ConcurrentRequest (Число параллельных запросов) \* RequestSize (Размер запроса). Значение по умолчанию — 16.



## Category
Accessing data
