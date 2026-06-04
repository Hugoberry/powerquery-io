---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Promovează primul rând de valori drept anteturi noi pentru coloane (de exemplu nume de coloane).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Promovează primul rând de valori drept anteturi noi pentru coloane (adică, numele coloanelor). În mod implicit, numai valorile text sau numerice sunt promovate ca anteturi. Opțiunile valide:

-   `PromoteAllScalars`: dacă este setată la `true`, toate valorile scalare din primul rând sunt promovate la anteturi folosind valoarea `Culture`, dacă este specificată (sau setarea regională curentă a documentului). Pentru valorile care nu pot fi convertite în text, va fi utilizat un nume de coloană implicit.
-   `Culture`: un nume de cultură care specifică cultura datelor.


## Examples

### Example #1
Promovați primul rând de valori din tabel.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2
Promovați toate valorile scalare din primul rând al acestui tabel în anteturi de coloane.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
