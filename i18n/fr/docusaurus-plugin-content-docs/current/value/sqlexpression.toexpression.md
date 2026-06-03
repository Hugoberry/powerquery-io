---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


Convertit la requête SQL fournie en code M. Cette fonction est destinée à un usage interne uniquement.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Remarks

Convertit la `sql` requête fournie en code M, avec les identifiants disponibles définis par `environment`. Cette fonction est destinée à un usage interne uniquement.



## Category
Values.Implementation
