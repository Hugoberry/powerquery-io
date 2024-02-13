---
title: Value.NativeQuery
---

# Value.NativeQuery


Evaluates a query against a target.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Evaluates <code>query</code> against <code>target</code> using the parameters specified in <code>parameters</code> and the options specified in <code>options</code>.<br />The output of the query is defined by <code>target</code>.<br /><code>target</code> provides the context for the operation described by <code>query</code>.<br /><code>query</code> describes the query to be executed against <code>target</code>. <code>query</code> is expressed in a manner specific to <code>target</code> (for example, a T-SQL statement).<br />The optional <code>parameters</code> value may contain either a list or record as appropriate to supply the parameter values expected by <code>query</code>.<br />The optional <code>options</code> record may contain options that affect the evaluation behavior of <code>query</code> against <code>target</code>. These options are specific to <code>target</code>.<br />



## Category
Values
