---
title: Function.ScalarVector
---

# Function.ScalarVector


Creates a scalar function on top of a vector function, batching multiple invocations.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Returns a scalar function of type <code>scalarFunctionType</code> that invokes <code>vectorFunction</code> with a single row of arguments and returns its single output. Additionally, when the scalar function is repeatedly applied for each row of a table of inputs, such as in Table.AddColumn, instead <code>vectorFunction</code> will be applied once for all inputs.<br /><code>vectorFunction</code> will be passed a table whose columns match in name and position the parameters of <code>scalarFunctionType</code>. Each row of this table contains the arguments for one call to the scalar function, with the columns corresponding to the parameters of <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> must return a list of the same length as the input table, whose item at each position must be the same result as evaluating the scalar function on the input row of the same position.<br />The input table is expected to be streamed in, so <code>vectorFunction</code> is expected to stream its output as input comes in, only working with one chunk of input at a time. In particular, <code>vectorFunction</code> must not enumerate its input table more than once.<br />



## Category
Function
