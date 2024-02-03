---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


## Description

Преобразует указанный запрос SQL в код M. Эта функция предназначена только для внутреннего использования.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Details

Преобразует указанный запрос <code>sql</code> в код M с доступными идентификаторами, определенными в <code>environment</code>. Эта функция предназначена только для внутреннего использования.



## Category
Values.Implementation
