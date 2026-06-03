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

Evaluates `query` against `target` using the parameters specified in `parameters` and the options specified in `options`.

The output of the query is defined by `target`.

`target` provides the context for the operation described by `query`.

`query` describes the query to be executed against `target`. `query` is expressed in a manner specific to `target` (for example, a T-SQL statement).

The optional `parameters` value may contain either a list or record as appropriate to supply the parameter values expected by `query`.

The optional `options` record may contain options that affect the evaluation behavior of `query` against `target`. These options are specific to `target`.



## Category
Values
