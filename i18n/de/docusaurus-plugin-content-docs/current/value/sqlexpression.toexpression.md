---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


Konvertiert die bereitgestellte SQL-Abfrage in M-Code. Diese Funktion ist nur für die interne Verwendung vorgesehen.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Remarks

Konvertiert die angegebene `sql`\-Abfrage in M-Code, wobei die verfügbaren Bezeichner durch `environment` definiert werden. Diese Funktion ist nur für die interne Verwendung vorgesehen.



## Category
Values.Implementation
