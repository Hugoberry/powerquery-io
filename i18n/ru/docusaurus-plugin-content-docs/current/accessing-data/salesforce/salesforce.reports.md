---
title: Salesforce.Reports
---

# Salesforce.Reports


Возвращает отчеты из учетной записи Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Возвращает отчеты из указанной в учетных данных учетной записи Salesforce. Учетная запись будет подключена с помощью заданного окружения `loginUrl`. Если оно не указано, учетная запись подключится к рабочей среде (https://login.salesforce.com). Чтобы задать дополнительные свойства, можно указать необязательный параметр записи `options`. Запись может содержать следующие поля:

-   `ApiVersion` : Версия API Salesforce для этого запроса. По умолчанию используется версия API 29.0.
-   `Timeout` : Время ожидания до отмены запроса к серверу. Значение по умолчанию зависит от источника.



## Category
Accessing data
