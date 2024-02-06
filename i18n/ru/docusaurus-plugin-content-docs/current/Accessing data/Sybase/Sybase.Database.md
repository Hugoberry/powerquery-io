---
title: Sybase.Database
---

# Sybase.Database


Возвращает таблицу таблиц и представлений SQL, доступных в базе данных Sybase.


## Syntax

```powerquery
Sybase.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Возвращает список таблиц, доступных в базе данных Sybase на сервере <code>server</code> в экземпляре базы данных <code>database</code>. Дополнительно к имени сервера через двоеточие может быть указан порт. Необязательный параметр записи <code>options</code> может быть указан для управления следующими параметрами.    <ul><li><code>CreateNavigationProperties</code> : Логическое значение (True или False), которое указывает, следует ли создавать свойства навигации в возвращаемых значениях. Значение по умолчанию&#160;— True.</li><li><code>NavigationPropertyNameGenerator</code> : Функция, которая используется для создания имен свойств навигации.</li><li><code>Query</code> : Собственный запрос SQL для извлечения данных. Если он создает несколько результирующих наборов, возвращается только первый из них.</li><li><code>CommandTimeout</code> : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию&#160;— 10&#160;минут.</li><li><code>ConnectionTimeout</code> : Время ожидания до отмены попытки подключения к серверу. Значение по умолчанию зависит от драйвера.</li><li><code>HierarchicalNavigation</code> : Логическое значение (True или False), которое указывает, следует ли просматривать таблицы, сгруппированные по именам схем. Значение по умолчанию&#160;— False.</li></ul>    Пример параметра записи: [option1 = value1, option2 = value2...] или [Query = "select ..."].    



## Category
Accessing data
