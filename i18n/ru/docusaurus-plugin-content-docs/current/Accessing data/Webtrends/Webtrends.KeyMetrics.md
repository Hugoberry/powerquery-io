---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Возвращает таблицу с ключевыми метриками Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Вызывает конечную точку Webtrends KeyMetrics и возвращает все данные в виде таблицы.


## Examples

### Example #1 
Запрашивает таблицу с ключевыми метриками для клиента 98765 за последние 30 дней
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Таблица с ключевыми метриками
```



