---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Возвращает коллекцию схем для источника данных ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Возвращает коллекцию схем для источника данных ADO.NET с именем поставщика <code>providerName</code> и строкой подключения <code>connectionString</code>. <code>connectionString</code> может быть текстом или записью пар "свойство-значение". Значения свойств могут быть выражены текстом или числом. Для указания дополнительных свойств можно предоставить необязательный параметр записи, <code>options</code>. Запись может содержать следующие поля:    <ul><li><code>CommandTimeout</code> : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию&#160;— 10&#160;минут.</li><li><code>SqlCompatibleWindowsAuth</code> : Логическое значение (True или False), которое определяет, следует ли создавать параметры строки подключения, совместимые с SQL Server, для проверки подлинности Windows. Значение по умолчанию&#160;— True.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
