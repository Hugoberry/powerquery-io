---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Tiek atgriezta tabula ar kolonnām norādītajā secībā.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Tiek atgriezta tabula no ievades `table` ar kolonnām, kuru secību norāda `columnOrder`. To kolonnu secība, kuras nav norādītas sarakstā, netiks mainīta. Ja kolonna nepastāv, tiek izraisīta kļūda, ja vien neobligātais parametrs `missingField` nenosaka alternatīvu (piemēram, `MissingField.UseNull` vai `MissingField.Ignore`).


## Examples

### Example #1
Mainiet kolonnu \[Phone\] un \[Name\] secību tabulā.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Mainiet kolonnu \[Phone\] un \[Address\] secību vai lietojiet MissingField.Ignore tabulā. Šī darbība nemaina tabulu, jo kolonna \[Address\] nepastāv.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
