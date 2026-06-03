---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


Konverterer den angivne SQL-forespørgsel til M-kode. Denne funktion er kun beregnet til intern brug.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Remarks

Konverterer den angivne `sql` forespørgsel til M-kode med de tilgængelige id'er, der er defineret af `environment`. Denne funktion er kun beregnet til intern brug.



## Category
Values.Implementation
