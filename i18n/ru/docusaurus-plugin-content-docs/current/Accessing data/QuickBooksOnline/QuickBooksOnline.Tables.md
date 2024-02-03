---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Импорт данных из QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Возвращает перечень доступных таблиц в QuickBooks Online. Вы можете ввести необязательный параметр записи <code>options</code> для указания следующих параметров.          <ul>            <li><code>ConnectionTimeout</code>: время ожидания перед прекращением попытки подключения к серверу.</li>            <li><code>CommandTimeout</code>: допустимое время выполнения запроса на сервере, прежде чем он будет отменен.</li>          </ul>        Параметр записи указывается в виде [параметр1 = значение1, параметр2 = значение2…].    


