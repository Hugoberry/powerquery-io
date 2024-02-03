---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Возвращает объекты из учетной записи Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Возвращает объекты из указанной в учетных данных учетной записи Salesforce. Учетная запись будет подключена с помощью заданного окружения <code>loginUrl</code>. Если оно не указано, учетная запись подключится к рабочей среде (https://login.salesforce.com). Чтобы задать дополнительные свойства, можно указать необязательный параметр записи <code>options</code>. Запись может содержать следующие поля:    <ul><li><code>CreateNavigationProperties</code> : Логическое значение (true или false), которое указывает, следует ли создавать свойства навигации в возвращаемых значениях. Значение по умолчанию&#160;— false.</li><li><code>ApiVersion</code> : Версия API Salesforce для этого запроса. По умолчанию используется версия API&#160;29.0.</li><li><code>Timeout</code> : Время ожидания до отмены запроса к серверу. Значение по умолчанию зависит от источника.</li></ul>    



## Category
Accessing data
