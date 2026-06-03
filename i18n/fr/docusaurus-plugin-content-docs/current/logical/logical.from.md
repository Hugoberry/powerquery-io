---
title: Logical.From
---

# Logical.From


Crée une logique à partir de la valeur spécifiée.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Retourne une valeur `logical` du `value` spécifié. Si le `value` spécifié est `null`, `Logical.From` retourne `null`. Si le `value` spécifié est `logical`, `value` est retourné. Les valeurs des types suivants peuvent être converties en valeur `logical` :

-   `text` : valeur `logical` à partir de la valeur de texte, soit `"true"`, soit `"false"`. Référez-vous à `Logical.FromText` pour plus de détails.
-   `number` : `false` si `value` est égal à `0`, sinon `true`.

Si `value` est d'un autre type, une erreur est retournée.


## Examples

### Example #1
Convertit `2` en une valeur `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
