---
title: Odbc.Query
---

# Odbc.Query


Возвращает результат запуска собственного запроса в источнике данных ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Возвращает результат запуска `query` со строкой подключения `connectionString` с помощью ODBC. `connectionString` может быть текстом или записью пар "свойство-значение". Значения свойств могут быть текстом или числом. Для указания дополнительных свойств можно предоставить необязательный параметр записи, `options`. Запись может содержать следующие поля:

-   `ConnectionTimeout` : Время ожидания до отмены попытки подключения к серверу. Значение по умолчанию — 15 секунд.
-   `CommandTimeout` : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию — 10 минут.
-   `SqlCompatibleWindowsAuth` : Логическое значение (True или False), которое определяет, следует ли создавать параметры строки подключения, совместимые с SQL Server, для проверки подлинности Windows. Значение по умолчанию — True.


## Examples

### Example #1
Возврат результата выполнения простого запроса к указанной строке подключения.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
