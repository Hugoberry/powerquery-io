---
title: Vertica.Database
---

# Vertica.Database


## Description

Импорт данных из Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Возвращает таблицу схем, доступных на сервере, имя которого указано в параметре <code>server</code>, из базы данных с именем в параметре <code>database</code>.Чтобы указать дополнительные свойства, можно использовать необязательный параметр записи <code>options</code>. Запись может содержать следующие поля:<ul>    <li><code>ConnectionTimeout</code>: время ожидания, прежде чем попытки подключиться к серверу будут прекращены. Значение по умолчанию зависит от драйвера.</li>    <li><code>CommandTimeout </code>: время, как долго может выполняться запрос на стороне сервера, пока он не будет отменен. Значение по умолчанию зависит от драйвера.</li></ul>


## Examples

### Example #1 
Перечисление таблиц в Vertica
```powerquery

```



