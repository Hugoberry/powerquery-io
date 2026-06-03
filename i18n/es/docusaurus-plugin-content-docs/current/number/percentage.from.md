---
title: Percentage.From
---

# Percentage.From


Devuelve un valor porcentual a partir de un valor determinado.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devuelve un valor `percentage` a partir del valor `value` dado. Si `value` es `null`, `Percentage.From` devuelve `null`. Si `value` es `text` con un símbolo de porcentaje final, se devolverá el número decimal convertido. En caso contrario, se convertirá en un valor `number` con `Number.From`. También se puede proporcionar un parámetro `culture` opcional (por ejemplo, "es-ES").


## Examples

### Example #1
Obtenga el valor `porcentual` de `"12,3 %"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
