---
title: Table.FromList
---

# Table.FromList


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


## Remarks

Convertit une liste <code>list</code> en table en appliquant la fonction de fractionnement facultative <code>splitter</code> à chaque élément de la liste. Par défaut, la liste est supposée être une liste de valeurs de texte fractionnées par des virgules. Le <code>columns</code> facultatif peut être le nombre de colonnes, une liste de colonnes ou un TableType. Les paramètres facultatifs <code>default</code> et <code>extraValues</code> peuvent aussi être spécifiés.


## Examples

### Example #1 
Créez une table à partir d’une liste à l’aide du séparateur par défaut.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    null,
    {"Letter", "Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Letter = "a", #"Example Word" = "apple"],
    [Letter = "b", #"Example Word" = "ball"],
    [Letter = "c", #"Example Word" = "cookie"],
    [Letter = "d", #"Example Word" = "door"]
})
```


### Example #2 
Créez une table à partir d’une liste à l’aide d’un séparateur personnalisé.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    Splitter.SplitByNothing(),
    {"Letter and Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [#"Letter and Example Word" = "a,apple"],
    [#"Letter and Example Word" = "b,ball"],
    [#"Letter and Example Word" = "c,cookie"],
    [#"Letter and Example Word" = "d,door"]
})
```


### Example #3 
Créez une table à partir de la liste à l’aide du séparateur Record.FieldValues.
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
