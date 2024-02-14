---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


Hiermee wordt de opgegeven SQL-query geconverteerd naar M-code. Deze functie is alleen bedoeld voor intern gebruik.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Remarks

Converteert de opgegeven <code>sql</code>-query naar M-code, met de beschikbare id's die zijn gedefinieerd door <code>environment</code>. Deze functie is alleen bedoeld voor intern gebruik.



## Category
Values.Implementation
