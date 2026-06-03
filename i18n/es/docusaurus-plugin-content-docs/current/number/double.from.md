---
title: Double.From
---

# Double.From


Crea un Double a partir del valor proporcionado.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devuelve un valor `number` Double a partir del valor `value` dado. Si `value` es `null`, `Double.From` devuelve `null`. Si `value` es `number` en el rango de Double, se devuelve `value`; en cualquier otro caso, se devuelve un error. Si `value` es de cualquier otro tipo, se convertirá en un valor `number` con `Number.FromText`. También se puede proporcionar un parámetro `culture` (por ejemplo, "es-ES").


## Examples

### Example #1
Obtener el valor `number` Double de `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
