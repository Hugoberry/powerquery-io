---
title: Currency.From
---

# Currency.From


Retourne une valeur de devise à partir de la valeur spécifiée.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retourne une valeur `currency` à partir de l'élément `value` spécifié. Si l'élément `value` spécifié est `null`, `Currency.From` retourne `null`. Si l'élément `value` spécifié est `number` dans la plage valide des devises, la partie fractionnaire de `value` est arrondie à 4 chiffres décimaux et est retournée. Si `value` donné est d'un autre type, il sera premièrement converti en valeur `number` en utilisant`Number.FromText`. La plage valide pour une devise va de `-922,337,203,685,477.5808` à `922,337,203,685,477.5807`. Référez-vous à `Number.Round` pour les modes d'arrondi disponibles. Le mode par défaut est `RoundingMode.ToEven`. Vous pouvez également fournir un `culture` facultatif (par exemple, "fr-fr").


## Examples

### Example #1
Obtenir la valeur `currency` de `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Obtenez la valeur `currency` de `"1.23455"` en utilisant `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
