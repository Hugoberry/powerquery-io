---
title: Logical.From
---

# Logical.From


Crea una lògica a partir del valor donat.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Retorna un valor `logical` a partir del valor `value` proporcionat. Si el valor `value` proporcionat és `null`, `Logical.From` retorna `null`. Si el valor `value` proporcionat és `logical`, es retorna `value`. Els valors dels tipus següents es poden convertir en un valor `logical`:

-   `text`: un valor `logical` a partir del valor de text, `"true"` o `"false"`. Consulteu `Logical.FromText` per obtenir més informació.
-   `number`: `false` si `value` és igual a `0`, `true` en cas contrari.

Si `value` és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1
Converteix `2` en un valor `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
