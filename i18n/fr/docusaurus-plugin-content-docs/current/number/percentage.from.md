---
title: Percentage.From
---

# Percentage.From


Retourne une valeur de pourcentage de la valeur donnée.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retourne une valeur `percentage` de la valeur `value` donnée. Si la valeur `value` donnée est `null`, `Percentage.From` retourne `null`. Si la valeur `value` donnée est `text` avec un symbole de pourcentage à la fin, le nombre décimal converti est retourné. Sinon, la valeur sera convertie en `number` en utilisant `Number.From`. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr").


## Examples

### Example #1
Obtenez la valeur `percentage` de `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
