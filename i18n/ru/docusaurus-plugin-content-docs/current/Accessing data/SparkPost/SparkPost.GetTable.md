---
title: SparkPost.GetTable
---

# SparkPost.GetTable


Возвращает таблицу доступных метрик из API SparkPost v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Remarks

Эту функцию можно использовать для извлечения данных из конкретной конечной точки "Metrics" SparkPost API v1. При обновлении этих таблиц или выполнении вызовов API SparkPost с помощью этого соединителя не забывайте, что API SparkPost имеет строгое ограничение скорости. Если сервер SparkPost возвращает код состояния 429, значит, вы превысили ограничение скорости и нужно подождать немного, прежде чем выполнять другие вызовы. При выборе значения для параметра "Число дней" обратите внимание, что API хранит данные только за последние шесть месяцев.


## Examples

### Example #1 
Извлекает метрики поддержки доставки count_sent и count_rejected для всех идентификаторов campaign_id, агрегированных за последние три дня. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
таблица
```



