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

Возвращает список таблиц из HDInsight Interactive Query, указанный в `database` на сервере HDInsight Interactive Query `server`. Вы можете указать у сервера номер порта через двоеточие. Вы также можете указать необязательный параметр `options` для управления следующими параметрами.

-   `ConnectionTimeout`: время ожидания до прекращения попытки подключиться к серверу. Значение по умолчанию зависит от драйвера.
-   `CommandTimeout`: максимальное время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию зависит от драйвера.

Параметр `options` задается в формате \[параметр1 = значение1, параметр2 = значение2…\].


