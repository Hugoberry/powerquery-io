---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Evaluerer en forespørgsel på en destination.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Details

Evaluerer <code>query</code> mod <code>target</code> ved hjælp af de parametre, der er angivet i <code>parameters</code> og de indstillinger, der er angivet i <code>options</code>.<br />Resultatet af forespørgslen defineres af <code>target</code>.<br /><code>target</code> angiver konteksten for den aktivitet, der beskrives af <code>query</code>.<br /><code>query</code> beskriver den forespørgsel, der skal køres på <code>target</code>. <code>query</code> udtrykkes på en måde, der er specifik for <code>target</code> (f.eks. en T-SQL-sætning).<br />Den valgfri værdi <code>parameters</code> kan (hvis det er relevant) indeholde enten en liste eller en post med de parameterværdier, der forventes af <code>query</code>.<br />Den valgfri post <code>options</code> kan indeholde indstillinger, der påvirker den måde, hvorpå <code>query</code> evalueres mod <code>target</code>. Disse indstillinger er specifikke for <code>target</code>.<br />



## Category
Values
