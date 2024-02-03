---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Combines the specified columns into a new record-valued column where each record has field names and values corresponding to the column names and values of the columns that were combined.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

Combines the specified columns of <code>table</code> into a new record-valued column named <code>newColumnName</code> where each record has field names and values corresponding to the column names and values of the columns that were combined. If a record is specified for <code>options</code>, the following options may be provided:    <ul>     <li> <code>DisplayNameColumn</code>: When specified as text, indicates that the given column name should be treated as the display name of the record. This need not be one of the columns in the record itself.</li>     <li> <code>TypeName</code>: When specified as text, supplies a logical type name for the resulting record which can be used during data load to drive behavior by the loading environment.</li>    </ul>    



## Category
Table.Transformation
