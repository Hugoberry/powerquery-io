---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

Возвращает содержимое указанного BLOB-объекта из хранилища Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

Возвращает содержимое BLOB-объекта по URL-адресу <code>url</code> из хранилища Azure. Вы можете указать <code>options</code> для управления следующими параметрами:    <ul><li><code>BlockSize</code> : Число байт, считываемых перед ожиданием потребителя данных. Значение по умолчанию&#160;— 4&#160;МБ.</li><li><code>RequestSize</code> : Число байт, которое пытается считать один HTTP-запрос к серверу. Значение по умолчанию&#160;— 4&#160;МБ.</li><li><code>ConcurrentRequests</code> : Параметр ConcurrentRequests поддерживает ускоренное скачивание данных, позволяя указать число параллельно выполняемых запросов за счет использования памяти. Требуемый объем памяти: ConcurrentRequest (Число параллельных запросов)&#160;\* RequestSize (Размер запроса). Значение по умолчанию&#160;— 16.</li></ul>



## Category
Accessing data
