---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Flyttar upp den första raden med värden som de nya kolumnrubrikerna (t.ex. kolumnnamn).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Höjer upp den första raden med värden som de nya kolumnrubrikerna (t.ex. kolumnnamn). Endast text och siffror höjs som standard upp som rubriker. Giltiga alternativ:    <div>      <code>PromoteAllScalars</code> : Om du väljer inställningen <code>true</code> höjs alla skalarvärden på den första raden upp som rubriker med hjälp av <code>Kultur</code>, om sådan angetts (eller det aktuella dokumentets nationella inställningar).    När det gäller värden som inte kan konverteras till text används ett standardkolumnnamn.    </div>    <div>    <code>Kultur</code> : Ett kulturnamn som anger informationens kultur.    </div>  


## Examples

### Example #1 
Flytta upp den första raden med värden i tabellen.
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
Höj upp alla skalärer på den första raden till rubriker.
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
