---
title: Sql.Database
---

# Sql.Database


## Description

Возвращает таблицу таблиц, представлений и хранимых функций SQL из базы данных SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Возвращает список таблиц, представлений и хранимых функций SQL из базы данных SQL Server <code>database</code> на сервере <code>server</code>. Дополнительно к имени сервера через двоеточие или запятую может быть указан порт. Можно указать необязательный параметр записи <code>options</code> для управления следующими параметрами.    <ul><li><code>Query</code> : Собственный запрос SQL для извлечения данных. Если он создает несколько результирующих наборов, возвращается только первый из них.</li><li><code>CreateNavigationProperties</code> : Логическое значение (True или False), которое указывает, следует ли создавать свойства навигации в возвращаемых значениях. Значение по умолчанию&#160;— True.</li><li><code>NavigationPropertyNameGenerator</code> : Функция, которая используется для создания имен свойств навигации.</li><li><code>MaxDegreeOfParallelism</code> : Число, которое задает значение предложения запроса &quot;maxdop&quot; в созданном запросе SQL.</li><li><code>CommandTimeout</code> : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию&#160;— 10&#160;минут.</li><li><code>ConnectionTimeout</code> : Время ожидания до отмены попытки подключения к серверу. Значение по умолчанию зависит от драйвера.</li><li><code>HierarchicalNavigation</code> : Логическое значение (True или False), которое указывает, следует ли просматривать таблицы, сгруппированные по именам схем. Значение по умолчанию&#160;— False.</li><li><code>MultiSubnetFailover</code> : Логическое значение (True или False), которое задает значение свойства &quot;MultiSubnetFailover&quot; в строке подключения. Значение по умолчанию&#160;— False.</li><li><code>UnsafeTypeConversions</code> : Логическое значение (true/false). Если оно равно true, то предпринимается попытка свернуть преобразования типа, способные завершиться сбоем и привести к сбою всего запроса. Не рекомендуется для общего применения.</li><li><code>ContextInfo</code> : Двоичное значение, используемое для задания CONTEXT_INFO перед выполнением каждой команды.</li><li><code>OmitSRID</code> : Логическое значение (true/false). Если оно равно true, то при создании данных стандарта Well-Known&#160;Text из типов geometry (&quot;геометрия&quot;) и geography (&quot;география&quot;) идентификатор SRID будет пропускаться.</li><li><code>EnableCrossDatabaseFolding</code> : Логическое значение (ИСТИНА или ЛОЖЬ), которое при значении ИСТИНА разрешает свертывание запросов между базами данных на одном сервере. Значение по умолчанию неверно.</li></ul>    Пример параметра записи: [option1 = value1, option2 = value2...] или [Query = "select ..."].    



## Category
Accessing data
