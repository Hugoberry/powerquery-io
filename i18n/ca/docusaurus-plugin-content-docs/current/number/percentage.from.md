---
title: Percentage.From
---

# Percentage.From


Ofereix com a resultat un valor percentual a partir del valor indicat.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna un valor `percentage` a partir del valor `value` proporcionat. Si el valor `value` proporcionat és `null`, `Percentage.From` retorna un valor `null`. Si el valor `value` és `text` amb un símbol de percentatge final, es retornarà el número decimal convertit. Altrament, el valor es convertirà en un valor `number` mitjançant `Number.From`. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Obteniu el valor `percentage` de `"12,3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
