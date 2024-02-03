---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Возвращает таблицу таблиц и представлений SQL из источника данных ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Возвращает таблицу таблиц и представлений SQL из источника данных ODBC, заданного в строке подключения <code>connectionString</code>. <code>connectionString</code> может быть текстом или записью пар "свойство-значение". Значения свойств могут быть текстом или числом. Для указания дополнительных свойств можно предоставить необязательный параметр записи, <code>options</code>. Запись может содержать следующие поля:    <ul><li><code>CreateNavigationProperties</code> : Логическое значение (True или False), которое указывает, следует ли создавать свойства навигации в возвращаемых значениях. Значение по умолчанию&#160;— True.</li><li><code>HierarchicalNavigation</code> : Логическое значение (True или False), которое указывает, следует ли просматривать таблицы, сгруппированные по именам схем. Значение по умолчанию&#160;— False.</li><li><code>ConnectionTimeout</code> : Время ожидания до отмены попытки подключения к серверу. Значение по умолчанию&#160;— 15&#160;секунд.</li><li><code>CommandTimeout</code> : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию&#160;— 10&#160;минут.</li><li><code>SqlCompatibleWindowsAuth</code> : Логическое значение (True или False), которое определяет, следует ли создавать параметры строки подключения, совместимые с SQL Server, для проверки подлинности Windows. Значение по умолчанию&#160;— True.</li></ul>


## Examples

### Example #1 
Возврат таблиц SQL и представлений из указанной строки подключения.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
