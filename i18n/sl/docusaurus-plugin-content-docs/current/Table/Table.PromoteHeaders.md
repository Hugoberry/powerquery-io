---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Poviša prvo vrstico vrednosti kot nove glave stolpcev (npr. imena stolpcev).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Poviša prvo vrstico vrednosti kot nove glave stolpcev (npr. imena stolpcev). V glave so privzeto povišane samo besedilne in številske vrednosti. Veljavne možnosti so:    <div>      <code>PromoteAllScalars</code>: če to možnost nastavite na <code>true</code>, so vse skalarne vrednosti v prvi vrstici povišane v glave s parametrom <code>Culture</code>, če je naveden (ali trenutnimi območnimi nastavitvami dokumenta).    Za vrednosti, ki jih je mogoče pretvoriti v besedilo, bo uporabljeno privzeto ime stolpca.    </div>    <div>    <code>Culture</code>: ime kulture, ki določa kulturo za podatke.    </div>  


## Examples

### Example #1 
Povišajte prvo vrstico z vrednostmi v tabeli.
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
Povišajte vse skalarne vrednosti v prvi vrstici tabele v glave.
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
