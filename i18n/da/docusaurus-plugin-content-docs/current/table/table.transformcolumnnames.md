---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformerer kolonnenavne ved hjælp af den angivne funktion.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transformerer kolonnenavne ved hjælp af den angivne `nameGenerator`\-funktion. Gyldige indstillinger:

`MaxLength` angiver den maksimale længde på nye kolonnenavne. Hvis den angivne funktion resulterer i et længere kolonnenavn, skal navnet afkortes.

`Comparer` bruges til at styre sammenligningen, når de nye kolonnenavne oprettes. Sammenligningsfunktioner kan bruges til at udføre sammenligninger, hvor der ikke skelnes mellem store og små bogstaver, eller udføre kulturelle- og landemæssige sammenligninger.

Følgende sammenligningsfunktioner er indbyggede og tilgængelige på formelsproget:

-   `Comparer.Ordinal`: Bruges til at udføre en præcis sammenligning ud fra ordenstal
-   `Comparer.OrdinalIgnoreCase`: Bruges til at udføre en præcis sammenligning ud fra ordenstal, hvor der ikke skelnes mellem små og store bogstaver
-   `Comparer.FromCulture`: Bruges til at udføre en sammenligning ud fra kultur


## Examples

### Example #1
Fjern tegnet `#(tab)` fra kolonnenavne
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Transformerer kolonnenavne for at generere navne på seks tegn, hvor der ikke skelnes mellem små og store bogstaver.
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
