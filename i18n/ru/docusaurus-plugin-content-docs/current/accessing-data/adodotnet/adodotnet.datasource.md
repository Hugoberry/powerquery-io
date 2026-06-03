---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Возвращает коллекцию схем для источника данных ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Возвращает коллекцию схем для источника данных ADO.NET с именем поставщика `providerName` и строкой подключения `connectionString`. `connectionString` может быть текстом или записью пар "свойство-значение". Значения свойств могут быть выражены текстом или числом. Для указания дополнительных свойств можно предоставить необязательный параметр записи, `options`. Запись может содержать следующие поля:

-   `CommandTimeout` : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию — 10 минут.
-   `SqlCompatibleWindowsAuth` : Логическое значение (True или False), которое определяет, следует ли создавать параметры строки подключения, совместимые с SQL Server, для проверки подлинности Windows. Значение по умолчанию — True.
-   `TypeMap`



## Category
Accessing data
