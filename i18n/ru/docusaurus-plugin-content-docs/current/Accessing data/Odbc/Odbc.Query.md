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

Возвращает результат запуска <code>query</code> со строкой подключения <code>connectionString</code> с помощью ODBC. <code>connectionString</code> может быть текстом или записью пар "свойство-значение". Значения свойств могут быть текстом или числом. Для указания дополнительных свойств можно предоставить необязательный параметр записи, <code>options</code>. Запись может содержать следующие поля:    <ul><li><code>ConnectionTimeout</code> : Время ожидания до отмены попытки подключения к серверу. Значение по умолчанию&#160;— 15&#160;секунд.</li><li><code>CommandTimeout</code> : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию&#160;— 10&#160;минут.</li><li><code>SqlCompatibleWindowsAuth</code> : Логическое значение (True или False), которое определяет, следует ли создавать параметры строки подключения, совместимые с SQL Server, для проверки подлинности Windows. Значение по умолчанию&#160;— True.</li></ul>


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
