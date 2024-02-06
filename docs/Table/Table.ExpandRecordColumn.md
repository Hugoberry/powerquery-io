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

Given the <code>column</code> of records in the input <code>table</code>, creates a table with a column for each field in the record. Optionally, <code>newColumnNames</code> may be specified to ensure unique names for the columns in the new table.    <ul>        <li><code>table</code>: The original table with the record column to expand. </li>        <li><code>column</code>: The column to expand.</li>        <li><code>fieldNames</code>: The list of fields to expand into columns in the table.</li>        <li><code>newColumnNames</code>: The list of column names to give the new columns. The new column names cannot duplicate any column in the new table.</li>    </ul>


## Examples

### Example #1 
Expand column [a] in the table &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; into 3 columns &#34;aa&#34;, &#34;bb&#34; and &#34;cc&#34;.
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
