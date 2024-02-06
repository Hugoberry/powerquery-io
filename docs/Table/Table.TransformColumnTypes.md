---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Applies type transformation(s) of the form \{ column, type } using a specific culture.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

Returns a table from the input <code>table</code> by applying the transform operation to the columns specified in the parameter <code>typeTransformations</code> (where format is \{ column name, type name}), using the specified culture in the optional parameter <code>culture</code> (for example, "en-US").    If the column doesn't exist, an exception is thrown.


## Examples

### Example #1 
Transform the number values in column [a] to text values from the table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
