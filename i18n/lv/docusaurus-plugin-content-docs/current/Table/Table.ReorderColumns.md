---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Tiek atgriezta tabula ar kolonnām norādītajā secībā.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Tiek atgriezta tabula no ievades <code>table</code> ar kolonnām, kuru secību norāda <code>columnOrder</code>. To kolonnu secība, kuras nav norādītas sarakstā, netiks mainīta.     Ja kolonna nepastāv, tiek aktivizēts izņēmums, ja neobligātais parametrs <code>missingField</code> nenorāda alternatīvu (piemēram, <code>MissingField.UseNull</code> vai <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Mainiet kolonnu [Phone] un [Name] secību tabulā.
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
Mainiet kolonnu [Phone] un [Address] secību vai lietojiet MissingField.Ignore tabulā. Šī darbība nemaina tabulu, jo kolonna [Address] nepastāv.
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
