---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Pārveido kolonnu nosaukumus, izmantojot norādīto funkciju.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Pārveido kolonnu nosaukumus, izmantojot norādīto funkciju `nameGenerator`. Tālāk norādītas derīgās opcijas:

`MaxLength`: norāda jauno kolonnu nosaukumu maksimālo garumu. Ja attiecīgā funkcija atgriež garāku kolonnas nosaukumu, šis nosaukums tiek saīsināts.

`Comparer`: izmanto, lai kontrolētu salīdzināšanu, kad tiek ģenerēti jaunie kolonnu nosaukumi. Salīdzinātājus var izmantot, lai nodrošinātu reģistrnejutīgu vai kultūrai un lokalizācijai atbilstošu salīdzināšanu.

Formulu valodā ir pieejami tālāk norādītie iebūvētie salīdzinātāji:

-   `Comparer.Ordinal`: izmanto precīzai kārtas salīdzināšanai
-   `Comparer.OrdinalIgnoreCase`: izmanto precīzai kārtas salīdzināšanai, kas nav reģistrjutīga
-   `Comparer.FromCulture`: izmanto, lai veiktu kultūrai atbilstošu salīdzināšanu


## Examples

### Example #1
Noņemt kolonnu nosaukumiem rakstzīmi `#(tab)`
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Transformē kolonnu nosaukumus, lai ģenerētu nosaukumus, kas nav garāki par 6 rakstzīmēm un nav reģistrjutīgi.
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
