---
title: Binary.View
---

# Binary.View


Creates or extends a binary with user-defined handlers for query and action operations.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Returns a view of `binary` where the functions specified in `handlers` are used in lieu of the default behavior of an operation when the operation is applied to the view.

If `binary` is provided, all handler functions are optional. If `binary` isn't provided, the `GetStream` handler function is required. If a handler function isn't specified for an operation, the default behavior of the operation is applied to `binary` instead (except in the case of `GetExpression`).

Handler functions must return a value that is semantically equivalent to the result of applying the operation against `binary` (or the resulting view in the case of `GetExpression`).

If a handler function raises an error, the default behavior of the operation is applied to the view.

`Binary.View` can be used to implement folding to a data source – the translation of M queries into source-specific operations (for example, to download a section of a file).

Refer to the published Power Query custom connector documentation for a more complete description of `Binary.View`.


## Examples

### Example #1
Create a basic view that doesn't require accessing the data in order to determine the length.
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
