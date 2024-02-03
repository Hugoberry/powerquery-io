---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Вычисляет запрос для целевого объекта.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Details

Вычисляет <code>query</code> в <code>target</code> с помощью параметров, указанных в <code>parameters</code> и в <code>options</code>.<br />Выходные данные запроса определяются <code>target</code>.<br />В <code>target</code> предоставляется контекст для операции, описанной <code>query</code>.<br />В <code>query</code> описывается запрос, который будет выполнен в <code>target</code>. <code>query</code> обычно выражается так же, как в <code>target</code> (например, в инструкции T-SQL).<br />Необязательное значение <code>parameters</code> может содержать соответствующий список или запись для предоставления значений параметров, ожидаемых <code>query</code>.<br />Необязательная запись <code>options</code> может содержать параметры, которые влияют на поведение выполнения <code>query</code> в <code>target</code>. Эти параметры относятся к <code>target</code>.<br />



## Category
Values
