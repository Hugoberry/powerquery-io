---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


Преобразует указанный запрос SQL в код M. Эта функция предназначена только для внутреннего использования.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Remarks

Преобразует указанный запрос `sql` в код M с доступными идентификаторами, определенными в `environment`. Эта функция предназначена только для внутреннего использования.



## Category
Values.Implementation
