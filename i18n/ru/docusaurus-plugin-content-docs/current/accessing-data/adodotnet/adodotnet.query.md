---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Возвращает результат запуска встроенного запроса к источнику данных ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Возвращает результат запуска `query` со строкой подключения `connectionString` с помощью поставщика ADO.NET `providerName`. `connectionString` может быть текстом или записью пар "свойство-значение". Значения свойств могут быть текстовыми или числовыми. Для указания дополнительных свойств можно предоставить необязательный параметр записи, `options`. Запись может содержать следующие поля:

-   `CommandTimeout` : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию — 10 минут.
-   `SqlCompatibleWindowsAuth` : Логическое значение (True или False), которое определяет, следует ли создавать параметры строки подключения, совместимые с SQL Server, для проверки подлинности Windows. Значение по умолчанию — True.



## Category
Accessing data
