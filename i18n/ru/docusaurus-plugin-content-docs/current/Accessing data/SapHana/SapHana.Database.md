---
title: SapHana.Database
---

# SapHana.Database


## Description

Возвращает пакеты в базе данных HANA SAP.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Возвращает таблицу многомерных пакетов из базы данных SAP HANA <code>server</code>. Может быть указан необязательный параметр записи <code>options</code> для управления следующими параметрами:    <ul><li><code>Query</code> : Собственный запрос SQL для извлечения данных. Если он создает несколько результирующих наборов, возвращается только первый из них.</li><li><code>Distribution</code> : SapHanaDistribution, который задает значение свойства Distribution в строке подключения. Маршрутизация инструкций&#160;— это способ определения правильного узла сервера распределенной системы перед выполнением инструкции. Значение по умолчанию&#160;— SapHanaDistribution.All.</li><li><code>Implementation</code> : Задает используемую реализацию соединителя SAP&#160;HANA.</li><li><code>EnableColumnBinding</code> : Привязывает переменные к столбцам результирующего набора SAP HANA при получении данных. Может повысить производительность за счет более высокой загрузки памяти. Значение по умолчанию — false.</li><li><code>ConnectionTimeout</code> : Время ожидания до отмены попытки подключения к серверу. Значение по умолчанию&#160;— 15&#160;секунд.</li><li><code>CommandTimeout</code> : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию&#160;— 10&#160;минут.</li></ul>    



## Category
Accessing data
