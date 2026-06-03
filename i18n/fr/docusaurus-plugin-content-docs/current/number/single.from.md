---
title: Single.From
---

# Single.From


Crée une valeur unique à partir de la valeur donnée.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retourne une valeur simple`number` du `value` donné. Si le `value` donné est `null`, `Single.From` retourne `null`. Si le `value` donné est `number` dans la plage de valeurs simples, `value` est retourné. dans le cas contraire, une erreur est retournée. Si `value` donné est d'un autre type, il sera converti en valeur `number` en utilisant`Number.FromText`. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr").


## Examples

### Example #1
Obtenez la valeur unique `number` de `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
