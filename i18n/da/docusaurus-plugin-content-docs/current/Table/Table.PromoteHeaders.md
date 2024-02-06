---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Hæver første række med værdier til de nye kolonneoverskrifter (f.eks. kolonnenavne).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Hæver den første række af værdier til de nye kolonneoverskrifter (f.eks. kolonnenavne). Som standard hæves kun tekst- og talværdier til overskrifter. Gyldige indstillinger:    <div>      <code>PromoteAllScalars</code>: Hvis de er angivet til <code>sand</code>, hæves alle skalarværdier i første række til overskrifter ved hjælp af <code>Kultur</code>, og hvis den er angivet (ellers benyttes aktuelle landestandard for dokument).    For værdier, der ikke kan konverteres til tekst, anvendes et standardkolonnenavn.    </div>    <div>    <code>Kultur</code>: Et kulturnavn, der angiver kulturen for dataene.    </div>  


## Examples

### Example #1 
Hæv første række med værdier i tabellen.
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
Hæv alle skalarer i tabellens første række til overskrifter.
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
