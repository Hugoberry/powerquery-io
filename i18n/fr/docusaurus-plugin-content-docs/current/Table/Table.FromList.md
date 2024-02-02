---
title: Table.FromList
---

# Table.FromList


## Description

Convertit une liste en table en appliquant la fonction de fractionnement spécifiée à chaque élément de la liste.


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Details

Convertit une liste <code>list</code> en table en appliquant la fonction de fractionnement facultative <code>splitter</code> à chaque élément de la liste. Par défaut, la liste est supposée être une liste de valeurs de texte fractionnées par des virgules. Le <code>columns</code> facultatif peut être le nombre de colonnes, une liste de colonnes ou un TableType. Les paramètres facultatifs <code>default</code> et <code>extraValues</code> peuvent aussi être spécifiés.


## Examples

### Example #1 
Crée une table à partir de la liste avec la colonne nommée &#34; Letters &#34;, en utilisant le séparateur par défaut.
```powerquery
Table.FromList({"a", "b", "c", "d"}, null, {"Letters"})
```

Result: 
```powerquery
Table.FromRecords({
    [Letters = "a"],
    [Letters = "b"],
    [Letters = "c"],
    [Letters = "d"]
})

```


### Example #2 
Crée une table à partir de la liste en utilisant le séparateur Record.FieldValues, la table résultante ayant &#34; CustomerID &#34; et &#34; Name &#34; comme noms de colonne.
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
