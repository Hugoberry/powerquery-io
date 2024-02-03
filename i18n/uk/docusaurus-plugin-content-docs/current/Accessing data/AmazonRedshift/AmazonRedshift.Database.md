---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Імпорт інформації з бази даних Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Повертає таблицю зі списком таблиць у кластері Amazon Redshift <code>server</code> у базі даних <code>database</code>. Можна вказати додатковий параметр запису (<code>options</code>), щоб керувати такими параметрами:<ul><li><code>Provider Name</code> (ім’я постачальника): текстове значення, яке використовуватиметься як ім’я постачальника для підключення. Використовується під час застосування Microsoft Authentication.</li><li><code>Batch Size</code> (розмір пакета): кількість рядків, отриманих під час одного виклику сервера.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



