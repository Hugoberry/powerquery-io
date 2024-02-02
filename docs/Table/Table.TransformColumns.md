---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transforms the values of one or more columns.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Details

Transforms <code>table</code> by applying each column operation listed in <code>transformOperations</code> (where the format is \{ column name, transformation } or \{ column name, transformation, new column type }).    If a <code>defaultTransformation</code> is specified, it will be applied to all columns not listed in <code>transformOperations</code>.    If a column listed in <code>transformOperations</code> doesn't exist, an exception is thrown unless the optional parameter <code>missingField</code> specifies an alternative (for example, <code>MissingField.UseNull</code> or <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Convert the text values in column [A] to number values, and the number values in column [B] to text values.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
Convert the number values in missing column [X] to text values, ignoring columns which don&#39;t exist.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Convert the number values in missing column [X] to text values, defaulting to null on columns which don&#39;t exist.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
Increment the number values in column [B] and convert them to text values, and convert all other columns to numbers.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
