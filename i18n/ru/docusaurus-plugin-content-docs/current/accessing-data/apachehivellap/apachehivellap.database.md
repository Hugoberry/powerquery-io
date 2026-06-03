---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


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


## Remarks

Возвращает список таблиц Hive LLAP из базы данных `database` на сервере Hive LLAP `server` с использованием выбранного протокола `protocol`. После имени сервера можно указать номер порта, отделив его двоеточием. Транспортный протокол Thrift представляет собой перечисляемый тип со значениями "Standard" и "HTTP". Вы можете указать дополнительный параметр `options` для управления следующими параметрами.

-   `ConnectionTimeout`: время ожидания при попытке подключения к серверу, по прошествии которого попытка отменяется. Значение по умолчанию зависит от драйвера.
-   `CommandTimeout`: допустимая длительность выполнения запроса на стороне сервера до его отмены. Значение по умолчанию зависит от драйвера.

Параметр `options` задается в формате \[параметр1 = значение1, параметр2 = значение2 и т. д.\].


