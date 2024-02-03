---
title: Parquet.Document
---

# Parquet.Document


## Description

Возвращает содержимое документа Parquet в виде таблицы.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Возвращает содержимое документа Parquet в виде таблицы. Параметры:    <ul>    <li> <code>TypeMapping</code>: текстовое значение, управляющее сопоставлением стандартного типа при чтении и записи файлов. Значение по умолчанию — null. Оно используется, чтобы сохранить максимально возможное соответствие исходному типу. Значение "SQL" позволяет получить результаты, наиболее совместимые с SQL Server.</li>    </ul>



## Category
Доступ к данным
