---
title: Table.FromRecords
---

# Table.FromRecords


Convertit une liste d'enregistrements en une table.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Convertit une liste spécifiée d’enregistrements en table.

-   `records` : La liste des enregistrements à convertir en table.
-   `columns` : (Facultatif) Une liste des noms des colonnes de la table ou le type de la table.
-   `missingField` : (Facultatif) Spécifie comment traiter les champs manquants dans une ligne. Utilisez l’une des valeurs suivantes :
    -   `MissingField.Error` : Tous les champ manquants génèrent une erreur (par défaut).
    -   `MissingField.UseNull` : Tous les champs manquants sont inclus sous forme de valeurs `null`.
      
    L’utilisation de `MissingField.Ignore` dans ce paramètre génère une erreur.


## Examples

### Example #1
Créez une table à partir des enregistrements. Les noms des champs d'enregistrement sont utilisés pour nommer les colonnes.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Créez une table à partir des enregistrements avec des colonnes typées et sélectionnez les colonnes de nombres.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Créez une table contenant le prénom, l’initiale du deuxième prénom et le nom de famille des clients à partir des enregistrements spécifiés. Si l’une des valeurs est manquante, remplacez-la par `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
