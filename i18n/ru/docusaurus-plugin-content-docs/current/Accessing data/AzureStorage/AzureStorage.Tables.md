---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Возвращает навигационную таблицу, содержащую таблицы, найденные в указанной учетной записи в хранилище Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Возвращает таблицу навигации, содержащую строку для каждой таблицы, найденной по URL-адресу учетной записи <code>account</code>, из хранилища Azure. Каждая строка содержит ссылку на таблицу Azure. Для указания дополнительных свойств можно использовать необязательный параметр записи <code>options</code>. Запись может содержать следующие поля:    <ul><li><code>Timeout</code> : Время ожидания до отмены запроса к серверу. Значение по умолчанию зависит от источника.</li></ul>



## Category
Accessing data
