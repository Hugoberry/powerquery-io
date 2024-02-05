---
title: Parquet.Document
---

# Parquet.Document


## Description

Повертає вміст документа Parquet у вигляді таблиці.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Повертає вміст документа Parquet як таблицю. Доступні параметри:    <ul>    <li> <code>TypeMapping</code> – текстове значення, що слугує, щоб контролювати зіставлення типів за замовчуванням під час читання та записування файлів. Стандартне значення – Null. Воно використовується, щоб спробувати зберегти якомога точнішу відповідність вихідному типу. Значення "Sql" дасть змогу отримати результати, найсумісніші з SQL Server.</li>    </ul>



## Category
Отримання доступу до даних
