---
title: Netezza.Database
---

# Netezza.Database


Импорт данных из базы данных IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу со списком таблиц, представлений и хранимых функций из базы данных Netezza Server <code>database</code> на сервере <code>server</code>. Для сервера можно указать номер порта через двоеточие. Для управления следующими параметрами можно указать параметр записи <code>options</code>:<ul>        <li><code>CreateNavigationProperties</code>: логическое значение (true или false), указывающее, следует ли создавать свойства навигации для возвращаемых значений (по умолчанию — true).</li>        <li><code>HierarchicalNavigation</code>: логическое значение (true или false), указывающее, следует ли группировать таблицы по именам схем (по умолчанию — false).</li>        <li><code>ConnectionTimeout</code>: длительность ожидания при попытке подключения к серверу, при превышении которой попытка подключения будет прервана. Значение по умолчанию зависит от драйвера.</li>        <li><code>CommandTimeout</code>: длительность выполнения запроса на стороне сервера до его отмены. Значение по умолчанию зависит от драйвера.</li><li><code>NormalizeDatabaseName</code>: логическое значение (true или false), указывающее, следует ли нормализовать имя базы данных к верхнему регистру или использовать его как есть (по умолчанию — true).</li></ul>Параметр записи задается в формате [параметр1 = значение1, параметр2 = значение2...].


## Examples

### Example #1 
Перечисление таблиц в проекте IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



