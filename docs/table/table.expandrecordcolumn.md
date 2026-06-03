---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Expands a column of records into columns with each of the values.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Given the `column` of records in the input `table`, creates a table with a column for each field in the record. Optionally, `newColumnNames` may be specified to ensure unique names for the columns in the new table.

-   `table`: The original table with the record column to expand.
-   `column`: The column to expand.
-   `fieldNames`: The list of fields to expand into columns in the table.
-   `newColumnNames`: The list of column names to give the new columns. The new column names cannot duplicate any column in the new table.


## Examples

### Example #1
Expand column \[a\] in the table `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` into 3 columns "aa", "bb" and "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
