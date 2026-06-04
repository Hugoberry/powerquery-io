---
title: Record.FromTable
---

# Record.FromTable


Luo tietueen taulukosta muodossa \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Palauttaa tietueen tietuetaulukosta `table`, joka sisältää kenttien nimiä ja arvojen nimiä `{[Name = name, Value = value]}`. Näyttöön tulee virhe, jos kenttien nimet eivät ole yksilöllisiä.


## Examples

### Example #1
Luo tietueen taulukosta muodossa Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
