---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Adds a new column with representative values obtained by fuzzy grouping values of the specified column in the table.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Adds a new column <code>newColumnName</code> to <code>table</code> with representative values of <code>columnName</code>. The representatives are obtained by fuzzily matching values in <code>columnName</code>, for each row.    An optional set of <code>options</code> may be included to specify how to compare the key columns. Options include:    <ul><li><code>Culture</code> : Allows grouping records based on culture-specific rules. It can be any valid culture name. For example, a Culture option of &quot;ja-JP&quot; groups records based on the Japanese culture. The default value is &quot;&quot;, which groups based on the Invariant English culture.</li><li><code>IgnoreCase</code> : A logical (true/false) value that allows case-insensitive key grouping. For example, when true, &quot;Grapes&quot; is grouped with &quot;grapes&quot;. The default value is true.</li><li><code>IgnoreSpace</code> : A logical (true/false) value that allows combining of text parts in order to find groups. For example, when true, &quot;Gra pes&quot; is grouped with &quot;Grapes&quot;. The default value is true.</li><li><code>SimilarityColumnName</code> : A name for the column that shows the similarity between an input value and the representative value for that input. The default value is null, in which case a new column for similarities will not be added.</li><li><code>Threshold</code> : A number between 0.00 and 1.00 that specifies the similarity score at which two values will be grouped.    For example, &quot;Grapes&quot; and &quot;Graes&quot; (missing the &quot;p&quot;) are grouped together only if this option is set to less than 0.90.    A threshold of 1.00 only allows exact matches.    (Note that a fuzzy &quot;exact match&quot; might ignore differences like casing, word order, and punctuation.)    The default value is 0.80.</li><li><code>TransformationTable</code> : A table that allows grouping records based on custom value mappings. It should contain &quot;From&quot; and &quot;To&quot; columns. For example, &quot;Grapes&quot; is grouped with &quot;Raisins&quot; if a transformation table is provided with the &quot;From&quot; column containing &quot;Grapes&quot; and the &quot;To&quot; column containing &quot;Raisins&quot;. Note that the transformation will be applied to all occurrences of the text in the transformation table. With the above transformation table, &quot;Grapes are sweet&quot; will also be grouped with &quot;Raisins are sweet&quot;.</li></ul><br />    


## Examples

### Example #1 
Find the representative values for the location of the employees.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
