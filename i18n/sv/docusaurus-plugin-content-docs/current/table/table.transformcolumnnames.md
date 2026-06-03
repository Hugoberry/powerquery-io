---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformerar kolumnnamn genom att använda den givna funktionen.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transformerar kolumnnamn genom att använda den givna `nameGenerator`\-funktionen. Giltiga alternativ:

`MaxLength` anger maxlängden för nya kolumnnamn. Om den givna funktionen resulterar i ett längre kolumnnamn kommer det långa namnet att trimmas.

`Comparer` används för att styra jämförelsen samtidigt som nya kolumnnamn genereras. Jämförelsefunktioner kan användas för att tillhandahålla skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser.

Följande inbyggda jämförelsefunktioner är tillgängliga i formelspråket:

-   `Comparer.Ordinal`: Används för att genomföra en exakt ordningstalsjämförelse
-   `Comparer.OrdinalIgnoreCase`: Används för att genomföra en exakt skiftlägesokänslig ordningstalsjämförelse
-   `Comparer.FromCulture`: Används för att genomföra en kulturmedveten jämförelse
\\r\\n


## Examples

### Example #1
Ta bort `#(tab)`\-tecknet från kolumnnamn
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Ändra kolumnnamn för att generera skiftlägesokänsliga namn med längden 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
