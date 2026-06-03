---
title: Single.From
---

# Single.From


Crea un Single a partir del valor proporcionado.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devuelve un valor `number` Single a partir del valor `value` dado. Si `value` es `null`, `Single.From` devuelve `null`. Si `value` es `number` en el rango de Single, se devuelve `value`; en cualquier otro caso, se devuelve un error. Si `value` es de cualquier otro tipo, se convertirá en un valor `number` con `Number.FromText`. También se puede proporcionar un parámetro `culture` (por ejemplo, "es-ES").


## Examples

### Example #1
Obtener el valor `number` Single de `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
