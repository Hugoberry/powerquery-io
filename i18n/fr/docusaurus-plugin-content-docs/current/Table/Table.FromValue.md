---
title: Table.FromValue
---

# Table.FromValue


## Description

Crée une table avec une colonne à partir de la valeur ou des valeurs fournies.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Crée une table avec une colonne contenant la valeur fournie ou une liste de valeurs <code>value</code>. Le paramètre d'enregistrement facultatif <code>options</code> peut être spécifié pour contrôler les options suivantes :    <ul>    <li> <code>DefaultColumnName</code> : nom de colonne utilisé pendant la création de la table à partir d'une liste ou d'une valeur scalaire.</li>    </ul>  


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
