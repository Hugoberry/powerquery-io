---
title: Table.FromValue
---

# Table.FromValue


Creates a table with a column from the provided value(s).


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Creates a table with a column containing the provided value or list of values, <code>value</code>. An optional record parameter, <code>options</code>, may be specified to control the following options:    <ul>    <li> <code>DefaultColumnName</code> : The column name used when constructing a table from a list or scalar value.</li>    </ul>  


## Examples

### Example #1 
Create a table from the value 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Create a table from the list.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
Create a table from the value 1, with a custom column name.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
