---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Remarks

Эту функцию можно использовать для вызова любой из конечных точек "Lists" SparkPost API v1. При вызовах API SparkPost с помощью этой функции не забывайте, что API SparkPost имеет строгое ограничение скорости. Если сервер SparkPost возвращает код состояния 429, значит, вы превысили ограничение скорости и нужно подождать немного, прежде чем выполнять другие вызовы.


## Examples

### Example #1 
Возвращает таблицу с одним столбцом, заполненным данными одной из конечных точек &#34;Lists&#34; SparkPost API v1 (сведения см. в документации SparkPost).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



