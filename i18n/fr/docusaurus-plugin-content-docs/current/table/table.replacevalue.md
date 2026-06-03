---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Remplace une valeur dans les colonnes spécifiées par une autre.


## Syntax

```powerquery
Table.ReplaceValue(
    table as table,
    oldValue as any,
    newValue as any,
    replacer as function,
    columnsToSearch as list
) as table
```


## Remarks

Permet de remplacer une valeur par une nouvelle valeur dans les colonnes spécifiées d’une table.

-   `table` : table dans laquelle rechercher.
-   `oldValue` : valeur à remplacer.
-   `newValue` : valeur de remplacement.
-   `replacer` : fonction de remplacement à utiliser. La fonction peut être `Replacer.ReplaceText` pour remplacer le texte d’origine par un nouveau texte, `Replacer.ReplaceValue` pour remplacer la valeur d’origine par une nouvelle valeur ou un replacement personnalisé.
-   `columnsToSearch` : liste contenant la ou les colonnes spécifiques dans la table pour rechercher la valeur à remplacer.


## Examples

### Example #1
Remplacez le texte « au revoir » par « monde » dans la colonne B, correspondant uniquement à la valeur entière.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "goodbye"],
        [A = 3, B = "goodbyes"]
    }),
    "goodbye",
    "world",
    Replacer.ReplaceValue,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"],
    [A = 3, B = "goodbyes"]
})
```


### Example #2
Remplacez le texte « votre » par « ou » dans la colonne B, correspondant à n’importe quelle partie de la valeur.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "wurld"]
    }),
    "ur",
    "or",
    Replacer.ReplaceText,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"]
})
```


### Example #3
Rendez anonymes les noms des employés des États-Unis.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each if [Country] = "US" then [Name] else false,
    each Text.Repeat("*", Text.Length([Name])),
    Replacer.ReplaceValue,
    {"Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "*****", Country = "US"],
    [Name = "Bob", Country = "CA"]
})
```


### Example #4
Rendez anonymes toutes les colonnes des employés des États-Unis.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each [Country] = "US",
    "?",
    (currentValue, isUS, replacementValue) =>
        if isUS then
            Text.Repeat(replacementValue, Text.Length(currentValue))
        else
            currentValue,
    {"Name", "Country"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "?????", Country = "??"],
    [Name = "Bob", Country = "CA"]
})
```




## Category
Table.Transformation
