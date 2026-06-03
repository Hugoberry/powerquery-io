---
title: Number.FromText
---

# Number.FromText


Crea los números de los formatos de texto comunes ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Devuelve un valor `number` a partir del valor de texto dado, `text`.

-   `text`: representación de texto de un valor numérico. La representación debe tener un formato numérico común como "15", "3423,10" o "5.0E-10".
-   `culture`: referencia cultural opcional que controla cómo se interpreta `text` (por ejemplo, "es-ES").


## Examples

### Example #1
Obtener el valor numérico de `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Obtener el valor numérico de `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
