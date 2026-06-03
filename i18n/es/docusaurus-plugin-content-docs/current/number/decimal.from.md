---
title: Decimal.From
---

# Decimal.From


Crea un Decimal a partir del valor proporcionado.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devuelve un valor `number` decimal a partir del valor `value` dado. Si `value` es `null`, `Decimal.From` devuelve `null`. Si `value` es `number` en el rango de Decimal, se devuelve `value`; en cualquier otro caso, se devuelve un error. Si `value` es de cualquier otro tipo, se convertirá en un valor `number` con `Number.FromText`. También se puede proporcionar un parámetro `culture` (por ejemplo, "es-ES").


## Examples

### Example #1
Obtener el valor `number` Decimal de `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
