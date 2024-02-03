---
title: Binary.View
---

# Binary.View


## Description

Creates or extends a binary with user-defined handlers for query and action operations.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Returns a view of <code>binary</code> where the functions specified in <code>handlers</code> are used in lieu of the default behavior of an operation when the operation is applied to the view.<br />If <code>binary</code> is provided, all handler functions are optional. If <code>binary</code> isn't provided, the <code>GetStream</code> handler function is required. If a handler function isn't specified for an operation, the default behavior of the operation is applied to <code>binary</code> instead (except in the case of <code>GetExpression</code>).<br />Handler functions must return a value that is semantically equivalent to the result of applying the operation against <code>binary</code> (or the resulting view in the case of <code>GetExpression</code>).<br />If a handler function raises an error, the default behavior of the operation is applied to the view.<br /><code>Binary.View</code> can be used to implement folding to a data source – the translation of M queries into source-specific operations (for example, to download a section of a file).<br />Refer to the published Power Query custom connector documentation for a more complete description of <code>Binary.View</code>.<br />


## Examples

### Example #1 
Create a basic view that doesn&#39;t require accessing the data in order to determine the length.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
