---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Applique les transformations de type au format \{ column, type \} à l'aide d'une culture spécifique.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Renvoie une table en appliquant les opérations de transformation aux colonnes spécifiées via une culture facultative.

-   `table` : table d’entrée à transformer.
-   `typeTransformations` : transformations de type à appliquer. Le format d’une transformation unique est \{ column name, type value \}. Vous pouvez utiliser une liste de transformations pour modifier les types de plusieurs colonnes à la fois. Si une colonne n’existe pas, une erreur est déclenchée.
-   `culture` : (facultatif) culture à utiliser lors de la transformation des types de colonne (par exemple, "en-US"). Si un enregistrement est spécifié pour `culture`, il peut contenir les champs suivants :
    -   `Culture` : culture à utiliser lors de la transformation des types de colonne (par exemple, "en-US").
    -   `MissingField`  : Si une colonne n’existe pas, une erreur est déclenchée sauf si ce champ fournit un comportement alternatif (par exemple, `MissingField.UseNull` ou `MissingField.Ignore`).

La valeur du type dans le paramètre `typeTransformations` peut être `n’importe laquelle`, tous les types de `nombre`, `texte`, tous les types de `date`, `heure`, `DateHeure`, `datetimezone` et `durée`, `logique` ou `binaire`. Les types `liste`, `enregistrement`, `table` ou les types de `fonction` ne sont pas valides pour ce paramètre.  
  
Pour chaque colonne répertoriée dans `typeTransformations`, la méthode ".From" correspondant à la valeur de type spécifiée est normalement utilisée pour effectuer la transformation. Par exemple, si une valeur de type `Currency.Type` est fournie pour une colonne, la fonction de transformation `Currency.From` est appliquée à chaque valeur de cette colonne.


## Examples

### Example #1
Transformez les valeurs de nombre en valeurs de texte dans la première colonne.
```powerquery
let
    Source = #table(type table [a = number, b = number],
    {
        {1, 2},
        {3, 4}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"a", type text}
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [a = text, b = number],
{
    {"1", 2},
    {"3", 4}
})
```


### Example #2
Transformez les dates de la table en leurs équivalents en texte français.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"Date", type text},
        "fr-FR"
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"JS-464", "USA", "24/03/2024"},
    {"LT-331", "France", "05/10/2024"},
    {"XE-100", "USA", "21/05/2024"},
    {"RT-430", "Germany", "18/01/2024"},
    {"LS-005", "France", "31/12/2023"},
    {"UW-220", "Germany", "25/02/2024"}
})
```


### Example #3
Transformez les dates de la table en leurs équivalents en texte allemand, et les valeurs de la table en pourcentages.
```powerquery
let
    Source = #table(type table [Date = date, Customer ID = text, Value = number],
    {
        {#date(2024, 3, 12), "134282", .24368},
        {#date(2024, 5, 30), "44343", .03556},
        {#date(2023, 12, 14), "22", .3834}
    }),
    #"Transform Columns" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"Value", Percentage.Type}},
        "de-DE")
in
    #"Transform Columns"
```

Result: 
```powerquery
#table(type table [Date = text, Customer ID = text, Value = Percentage.Type],
{
    {"12.03.2024", "134282", .24368},
    {"30.05.2024", "44343", .03556},
    {"14.12.2023", "22", .3834}
})
```


### Example #4
Appliquez des transformations avec une valeur d’enregistrement pour `culture`.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"NewColumn", type number}},
        [Culture="fr-FR", MissingField=MissingField.UseNull]
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text, NewColumn = number],
{
    {"JS-464", "USA", "24/03/2024", null},
    {"LT-331", "France", "05/10/2024", null},
    {"XE-100", "USA", "21/05/2024", null},
    {"RT-430", "Germany", "18/01/2024", null},
    {"LS-005", "France", "31/12/2023", null},
    {"UW-220", "Germany", "25/02/2024", null}
})
```




## Category
Table.Transformation
