---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Podiže nivo prvog reda vrednosti na nivo novih zaglavlja kolona (tj. imena kolona).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Podiže nivo prvog reda vrednosti na nivo novih zaglavlja kolona (tj. imena kolona). Podrazumevano se samo tekstualne ili numeričke vrednosti podižu na nivo zaglavlja. Važeće opcije:    <div>      <code>PromoteAllScalars</code>: Ako se postavi na <code>true</code>, sve skalarne vrednosti u prvom redu podižu se na nivo zaglavlja pomoću koda <code>Culture</code> ukoliko je naveden (odnosno pomoću trenutnog lokalnog standarda dokumenta).    Za vrednosti koje ne mogu da se konvertuju u tekst biće korišćeno podrazumevano ime kolone.    </div>    <div>    <code>Culture</code>: Ime kulture koje navodi kulturu za podatke.    </div>  


## Examples

### Example #1 
Podizanje nivoa prvog reda vrednosti u tabeli.
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
Podignite nivo svih skalarnih vrednosti u prvom redu tabele na nivo zaglavlja.
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
