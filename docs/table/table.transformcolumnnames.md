---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transforms column names by using the given function.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transforms column names by using the given <code>nameGenerator</code> function. Valid options:    <div>      <code>MaxLength</code> specifies the maximum length of new column names. If the given function results with a longer column name, the long name will be trimmed.    </div>    <div>      <code>Comparer</code> is used to control the comparison while generating new column names. Comparers can be used to provide case-insensitive or culture and locale-aware comparisons.    </div>    <div>      The following built-in comparers are available in the formula language:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: Used to perform an exact ordinal comparison</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Used to perform an exact ordinal case-insensitive comparison</li>      <li> <code>Comparer.FromCulture</code>: Used to perform a culture-aware comparison</li>    </ul>    


## Examples

### Example #1 
Remove the &lt;code&gt;#(tab)&lt;/code&gt; character from column names
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Transform column names to generate case-insensitive names of length 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
