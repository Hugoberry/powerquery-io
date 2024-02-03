---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

Импорт данных из Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Details

Возвращает список таблиц Hive LLAP из базы данных <code>database</code> на сервере Hive LLAP <code>server</code> с использованием выбранного протокола <code>protocol</code>. После имени сервера можно указать номер порта, отделив его двоеточием. Транспортный протокол Thrift представляет собой перечисляемый тип со значениями "Standard" и "HTTP". Вы можете указать дополнительный параметр <code>options</code> для управления следующими параметрами.<ul>        <li><code>ConnectionTimeout</code>: время ожидания при попытке подключения к серверу, по прошествии которого попытка отменяется. Значение по умолчанию зависит от драйвера.</li>        <li><code>CommandTimeout</code>: допустимая длительность выполнения запроса на стороне сервера до его отмены. Значение по умолчанию зависит от драйвера.</li></ul>Параметр <code>options</code> задается в формате [параметр1 = значение1, параметр2 = значение2 и т. д.].


