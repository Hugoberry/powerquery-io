---
title: WorkplaceAnalytics.Data
---

# WorkplaceAnalytics.Data



## Syntax

```powerquery
WorkplaceAnalytics.Data(
    scopeId as text,
    optional jobName as text,
    optional jobId as text,
    optional schemaType as text
) as table
```


## Remarks

Импортируйте еженедельные метрики и данные атрибутов из Рабочей аналитики.


## Examples

### Example #1 
Возвращает таблицу с видимыми атрибутами и метриками за неделю для каждого оцениваемого сотрудника в секции.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```



