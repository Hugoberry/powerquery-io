---
title: MailChimp.Collection
---

# MailChimp.Collection


Возвращает таблицу с данными от конечной точки MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Remarks

Делает вызов API MailChimp и возвращает результирующий набор данных в виде таблицы. Осуществляет автоматическое листание по всем результатам. Можно использовать необязательный параметр entityName для конечных точек API, у которых не совпадают корневая конечная точка и основное значение entityName в ответе JSON.


## Examples

### Example #1 
Получает таблицу данных от конечной точки списков API MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Таблица с данными списка.
```


### Example #2 
Получает таблицу данных от конечной точки папок кампаний API MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Таблица с данными папок кампаний.
```



