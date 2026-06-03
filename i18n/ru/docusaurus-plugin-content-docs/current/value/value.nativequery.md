---
title: Value.NativeQuery
---

# Value.NativeQuery


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


## Remarks

Вычисляет `query` в `target` с помощью параметров, указанных в `parameters` и в `options`.

Выходные данные запроса определяются `target`.

В `target` предоставляется контекст для операции, описанной `query`.

В `query` описывается запрос, который будет выполнен в `target`. `query` обычно выражается так же, как в `target` (например, в инструкции T-SQL).

Необязательное значение `parameters` может содержать соответствующий список или запись для предоставления значений параметров, ожидаемых `query`.

Необязательная запись `options` может содержать параметры, которые влияют на поведение выполнения `query` в `target`. Эти параметры относятся к `target`.



## Category
Values
