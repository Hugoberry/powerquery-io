---
title: Int64.From
---

# Int64.From


Crée un entier 64 bits à partir de la valeur donnée.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retourne une valeur entière 64 bits `number` du `value` donné. Si le `value` donné est `null`, `Int64.From` retourne `null`. Si le `value` donné est `number` dans la plage d'entiers 64 bits sans partie fractionnaire, `value` est retourné. S'il comprend une partie fractionnaire, le nombre est arrondi selon le mode d'arrondi spécifié. Le mode d'arrondi par défaut est `RoundingMode.ToEven`. Si `value` donné est d'un autre type, il sera converti en valeur `number` en utilisant`Number.FromText`. Référez-vous à `Number.Round` pour les modes d'arrondi disponibles. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr").


## Examples

### Example #1
Obtenez la valeur entière 64 bits `number` de `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obtenez la valeur entière de 64 bits `number` de `"4.5"` en utilisant `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
