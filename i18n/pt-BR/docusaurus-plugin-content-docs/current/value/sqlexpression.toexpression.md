---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


Converte a consulta SQL fornecida em código M. Esta função está destinada somente para uso interno.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Remarks

Converte a consulta `sql` fornecida para o código M, com os identificadores disponíveis definidos por `environment`. Esta função é destinada apenas para uso interno.



## Category
Values.Implementation
