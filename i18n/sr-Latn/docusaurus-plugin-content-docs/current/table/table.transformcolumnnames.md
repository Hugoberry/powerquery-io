---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformiše imena kolona pomoću date funkcije.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transformiše imena kolona pomoću date `nameGenerator` funkcije. Važeće opcije:

`MaxLength` navodi maksimalnu dužinu imena novih kolona. Ako data funkcija dovede do dužeg imena kolone, ime će biti skraćeno.

`Comparer` se koristi za kontrolisanje poređenja prilikom generisanja imena novih kolona. Upoređivači mogu da se koriste za obezbeđivanje poređenja koja ne razlikuju velika i mala slova niti uzimaju u obzir kulturu i lokalni standard.

Sledeći ugrađeni upoređivači dostupni su u jeziku formule:

-   `Comparer.Ordinal`: Koristi se za izvršavanje tačnog poređenja rednih brojeva
-   `Comparer.OrdinalIgnoreCase`: Koristi se za izvršavanje tačnog poređenja rednih brojeva koje ne razlikuje velika i mala slova
-   `Comparer.FromCulture`: Koristi se za izvršavanje poređenja koje uzima u obzir kulturu


## Examples

### Example #1
Uklonite znak `#(tab)` iz imena kolona
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Transformišite imena kolona da biste generisali imena koja sadrže 6 znakova i ne razlikuju velika i mala slova.
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
