---
title: Decimal.From
---

# Decimal.From


Crée une valeur décimale à partir de la valeur donnée.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retourne une valeur décimale`number` du `value` donné. Si le `value` donné est `null`, `Décimal.From` retourne `null`. Si le `value` donné est `number` dans la plage de valeurs décimales, `value` est retourné. dans le cas contraire, une erreur est retournée. Si `value` donné est d'un autre type, il sera converti en valeur `number` en utilisant`Number.FromText`. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr").


## Examples

### Example #1
Obtenez la valeur décimale `number` de `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
