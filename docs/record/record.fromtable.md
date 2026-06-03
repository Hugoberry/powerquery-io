---
title: Record.FromTable
---

# Record.FromTable


Creates a record from a table of the form \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Returns a record from a table of records `table` containing field names and value names `{[Name = name, Value = value]}`. An error is raised if the field names are not unique.


## Examples

### Example #1
Create a record from the table of the form Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
