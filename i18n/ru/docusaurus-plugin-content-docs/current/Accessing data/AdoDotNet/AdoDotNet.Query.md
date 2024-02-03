---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

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


## Details

Возвращает результат запуска <code>query</code> со строкой подключения <code>connectionString</code> с помощью поставщика ADO.NET <code>providerName</code>. <code>connectionString</code> может быть текстом или записью пар "свойство-значение". Значения свойств могут быть текстовыми или числовыми. Для указания дополнительных свойств можно предоставить необязательный параметр записи, <code>options</code>. Запись может содержать следующие поля:    <ul><li><code>CommandTimeout</code> : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию&#160;— 10&#160;минут.</li><li><code>SqlCompatibleWindowsAuth</code> : Логическое значение (True или False), которое определяет, следует ли создавать параметры строки подключения, совместимые с SQL Server, для проверки подлинности Windows. Значение по умолчанию&#160;— True.</li></ul>



## Category
Accessing data
