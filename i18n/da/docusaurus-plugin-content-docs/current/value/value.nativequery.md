---
title: Value.NativeQuery
---

# Value.NativeQuery


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


## Remarks

Evaluerer `query` mod `target` ved hjælp af de parametre, der er angivet i `parameters` og de indstillinger, der er angivet i `options`.

Resultatet af forespørgslen defineres af `target`.

`target` angiver konteksten for den aktivitet, der beskrives af `query`.

`query` beskriver den forespørgsel, der skal køres på `target`. `query` udtrykkes på en måde, der er specifik for `target` (f.eks. en T-SQL-sætning).

Den valgfri værdi `parameters` kan (hvis det er relevant) indeholde enten en liste eller en post med de parameterværdier, der forventes af `query`.

Den valgfri post `options` kan indeholde indstillinger, der påvirker den måde, hvorpå `query` evalueres mod `target`. Disse indstillinger er specifikke for `target`.



## Category
Values
