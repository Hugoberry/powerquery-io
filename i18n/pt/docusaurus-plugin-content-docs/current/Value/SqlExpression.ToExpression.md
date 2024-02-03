---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


## Description

Converts the provided SQL query to M code. This function is intended for internal use only.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Details

Converts the provided <code>sql</code> query to M code, with the available identifiers defined by <code>environment</code>. This function is intended for internal use only.



## Category
Values.Implementation
