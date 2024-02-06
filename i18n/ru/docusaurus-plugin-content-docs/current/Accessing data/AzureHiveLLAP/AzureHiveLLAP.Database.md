---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Импорт данных из HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Возвращает список таблиц из HDInsight Interactive Query, указанный в <code>database</code> на сервере HDInsight Interactive Query <code>server</code>. Вы можете указать у сервера номер порта через двоеточие. Вы также можете указать необязательный параметр <code>options</code> для управления следующими параметрами.<ul>        <li><code>ConnectionTimeout</code>: время ожидания до прекращения попытки подключиться к серверу. Значение по умолчанию зависит от драйвера.</li>        <li><code>CommandTimeout</code>: максимальное время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию зависит от драйвера.</li></ul>Параметр <code>options</code> задается в формате [параметр1 = значение1, параметр2 = значение2…].


