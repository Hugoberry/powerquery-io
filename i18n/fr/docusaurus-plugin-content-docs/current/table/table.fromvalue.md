---
title: Table.FromValue
---

# Table.FromValue


Crée une table avec une colonne à partir de la valeur ou des valeurs fournies.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Crée un tableau contenant une colonne avec la valeur ou la liste de valeurs fournie, `value`. Un paramètre d'enregistrement facultatif `options` peut être spécifié pour contrôler les options suivantes :

-   `DefaultColumnName` : Le nom de colonne utilisé lors de la construction d'une table à partir d'une liste ou d'une valeur scalaire.


## Examples

### Example #1
Créez une table à partir de la valeur 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Crée une table à partir de la liste.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3
Créez une table à partir de la valeur 1, avec un nom de colonne personnalisé.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
