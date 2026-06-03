---
title: Table.TransformColumns
---

# Table.TransformColumns


Transformez les valeurs d’une ou plusieurs colonnes.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Transforme le tableau spécifié en appliquant chaque opération de colonne dans une liste.

-   `table` : tableau à transformer.
-   `transformOperations` : transformations à effectuer dans le tableau. Le format de ce paramètre est soit \{ column name, transformation \}, soit \{ column name, transformation, new column type \}.
-   `defaultTransformation` : (facultatif) transformation par défaut appliquée à toutes les colonnes non répertoriées dans `transformOperations`.
-   `missingField` : (facultatif) spécifie l’action attendue pour les valeurs manquantes. Si une colonne répertoriée dans `transformOperations` n’existe pas, une erreur est levée (`MissingField.Error`), sauf si ce paramètre spécifie une alternative. Utilisez l’une des valeurs suivantes :
    -   `MissingField.UseNull` : Tous les champs manquants sont inclus sous forme de valeurs `null`.
    -   `MissingField.Ignore` : tout champ manquant est ignoré.


## Examples

### Example #1
Convertissez les valeurs de texte de la colonne \[A\] en valeurs numériques et les valeurs numériques de la colonne \[B\] en valeurs de texte.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2
Convertissez les valeurs numériques de la colonne manquante \[X\] en valeurs de texte, par défaut en colonnes `null` qui n’existent pas.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #3
Incrémentez les valeurs numériques dans la colonne \[B\] et convertissez-les en valeurs de texte, puis convertissez toutes les autres colonnes en nombres.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```


### Example #4
Déplacez les tâches de maintenance planifiées qui se produisent un jour férié aux États-Unis vers le jour suivant ou, si le jour férié est un vendredi, vers le lundi suivant.
```powerquery
let
    MaintenanceSchedule = #table(type table [Task = text, Date = date],
    {
        {"HVAC Check", #date(2025, 7, 10)},         // Not a holiday
        {"Window Washing", #date(2025, 9, 1)},      // Labor Day
        {"Fire Drill", #date(2025, 9, 17)},         // Not a holiday
        {"Light Replacement", #date(2025, 11, 27)}  // Thanksgiving
    }),
    USHolidays = {
        #date(2025, 1, 1),   // New Year's Day
        #date(2025, 7, 4),   // Independence Day
        #date(2025, 9, 1),   // Labor Day
        #date(2025, 11, 27), // Thanksgiving
        #date(2025, 12, 25)  // Christmas
    },
    AdjustedSchedule = Table.TransformColumns(
        MaintenanceSchedule,
        {{"Date", each if List.Contains(USHolidays, _) then
            if Date.DayOfWeek(_, Day.Sunday) = 5 then
                Date.AddDays(_, 3)     // Friday to Monday
            else
                Date.AddDays(_, 1)     // Other to next day
        else _, type date}}
    )
in
    AdjustedSchedule
```

Result: 
```powerquery
#table(type table[Task = text, Date = date],
{
    {"HVAC Check", #date(2025, 7, 10)},
    {"Window Washing", #date(2025, 9, 2)},
    {"Fire Drill", #date(2025, 9, 17)},
    {"Light Replacement", #date(2025, 11, 28)}
})
```




## Category
Table.Transformation
