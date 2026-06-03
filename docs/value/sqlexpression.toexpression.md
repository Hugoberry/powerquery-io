---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


Converts the provided SQL query to M code. This function is intended for internal use only.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Remarks

Converts the provided `sql` query to M code, with the available identifiers defined by `environment`. This function is intended for internal use only.



## Category
Values.Implementation
