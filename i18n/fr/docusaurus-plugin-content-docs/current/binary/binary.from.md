---
title: Binary.From
---

# Binary.From


Crée un binaire à partir de la valeur spécifiée


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Retourne une valeur `binary` du `value` spécifié. Si le `value` spécifié est `null`, `Binary.From` retourne `null`. Si le `value` spécifié est `binary`, `value` est retourné. Les valeurs des types suivants peuvent être converties en valeur `binary` :

-   `text` : valeur `binary` à partir de la représentation de texte. Référez-vous à `Binary.FromText` pour plus de détails.

Si `value` est d'un autre type, une erreur est retournée.


## Examples

### Example #1
Obtient la valeur `binary` de `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
