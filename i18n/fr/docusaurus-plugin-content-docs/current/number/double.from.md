---
title: Double.From
---

# Double.From


Crée une valeur double à partir de la valeur donnée.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retourne une valeur double `number` du `value` donné. Si le `value` donné est `null`, `Double.From` retourne `null`. Si le `value` donné est `number` dans la plage de valeurs doubles, `value` est retourné. dans le cas contraire, une erreur est retournée. Si `value` donné est d'un autre type, il sera converti en valeur `number` en utilisant`Number.FromText`. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr").


## Examples

### Example #1
Obtenez la valeur double `number` de `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
