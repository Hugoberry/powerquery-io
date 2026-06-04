---
title: Number.FromText
---

# Number.FromText


Crea nombres a partir de formats de text comuns ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Retorna un valor `number` a partir del valor de text `text` proporcionat.

-   `text`: representació textual d'un valor de nombre. La representació ha de tenir un format de nombre comú, com ara "15", "3,423.10" o "5.0E-10".
-   `culture`: referència cultural opcional que controla com s'interpreta `text` (per exemple, "en-US").


## Examples

### Example #1
Permet obtenir el valor numèric de `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Permet obtenir el valor numèric de `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
