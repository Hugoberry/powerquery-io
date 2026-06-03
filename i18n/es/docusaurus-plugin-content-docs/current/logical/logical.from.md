---
title: Logical.From
---

# Logical.From


Crea una lógica a partir del valor dado.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Devuelve un valor `logical` a partir del `value` especificado. Si el `value` especificado es `null`, `Logical.From` devuelve `null`. Si el `value` especificado es `logical`, se devuelve `value`. Los valores de los tipos siguientes se pueden convertir a un valor `logical`:

-   `text`: un valor `logical` a partir del valor de texto, ya sea `"false"` o `"true"`. Para más información, vea `Logical.FromText`.
-   `number`: `false` si `value` es igual que `0`, `true` en caso contrario.

Si `value` es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1
Convertir `2` en un valor `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
