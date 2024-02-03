---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


## Description

Konverterar den angivna SQL-frågan till M-kod. Den här funktionen är endast avsedd för intern användning.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Details

Konverterar den angivna <code>sql</code> frågan till M-kod, med tillgängliga identifierare som definieras av <code>environment</code>. Den här funktionen är endast avsedd för intern användning.



## Category
Values.Implementation
