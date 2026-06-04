---
title: SparkPost.GetTable
---

# SparkPost.GetTable


Повертає таблицю доступних показників з інтерфейсу SparkPost API версії 1.


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

Ця функція дає змогу отримувати дані від окремої кінцевої точки "Показники" інтерфейсу SparkPost API версії 1. Оновлюючи ці таблиці або викликаючи SparkPost API за допомогою цього з’єднувача, пам’ятайте, що SparkPost API має суворе обмеження на частоту викликів. Якщо сервер SparkPost повертає код стану 429, це означає, що ви досягли обмеження частоти й повинні трохи зачекати, перш ніж здійснювати подальші виклики. Вибираючи значення для параметра "Кількість днів", майте на увазі, що цей API зберігає дані лише за 6 місяців.


## Examples

### Example #1
Отримує для всіх ідентифікаторів "campaign\_ids" показники доставки "count\_sent" і "count\_rejected", узагальнені за останні три дні.
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
таблиця
```



