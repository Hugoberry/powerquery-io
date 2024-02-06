---
title: HdInsight.Contents
---

# HdInsight.Contents


Возвращает навигационную таблицу, содержащую контейнеры, найденные в указанной учетной записи в хранилище Azure.


## Syntax

```powerquery
HdInsight.Contents(
    account as text
) as table
```


## Remarks

Возвращает навигационную таблицу, содержащую одну строку для каждого контейнера, найденного по URL-адресу учетной записи <code>account</code> в хранилище Azure. Каждая строка содержит ссылку на BLOB-объекты в контейнере.



## Category
Accessing data
