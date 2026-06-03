---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Возвращает содержимое указанного BLOB-объекта из хранилища Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Возвращает содержимое BLOB-объекта по URL-адресу `url` из хранилища Azure. Вы можете указать `options` для управления следующими параметрами:

-   `BlockSize` : Число байт, считываемых перед ожиданием потребителя данных. Значение по умолчанию — 4 МБ.
-   `RequestSize` : Число байт, которое пытается считать один HTTP-запрос к серверу. Значение по умолчанию — 4 МБ.
-   `ConcurrentRequests` : Параметр ConcurrentRequests поддерживает ускоренное скачивание данных, позволяя указать число параллельно выполняемых запросов за счет использования памяти. Требуемый объем памяти: ConcurrentRequest (Число параллельных запросов) \* RequestSize (Размер запроса). Значение по умолчанию — 16.



## Category
Accessing data
