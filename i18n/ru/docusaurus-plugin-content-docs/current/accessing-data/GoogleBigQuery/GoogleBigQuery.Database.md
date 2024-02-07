---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Импорт данных из базы данных Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

      Возвращает таблицу доступных проектов в Google BigQuery. Возможно указание необязательного параметра записи <code>options</code> для управления следующими свойствами:      <ul>        <li><code>ConnectionTimeout</code>. Длительность ожидания, прежде чем попытка подключения к серверу будет отменена. По умолчанию используется значение времени ожидания подключения ODBC.</li>        <li><code>CommandTimeout</code>. Указывает, как долго может выполняться запрос на стороне сервера, прежде чем он будет отменен.</li>        <li><code>BillingProject</code>. Идентификатор проекта выставления счетов. Значение по умолчанию — первый из доступных проектов.</li>        <li><code>UseStorageApi</code>. Указывает, использовать ли BigQuery Storage API для больших результирующих наборов. Значение по умолчанию — true (т.е. использовать). Чтобы не использовать Storage API, задайте значение false.</li>      </ul>    Параметр записи указывается в формате [свойство1 = значение1, свойство2 = значение2…].    


## Examples

### Example #1 
Перечисление доступных проектов в Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



