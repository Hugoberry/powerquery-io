---
title: Binary.From
---

# Binary.From


Creates a binary from the given value


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Returns a `binary` value from the given `value`. If the given `value` is `null`, `Binary.From` returns `null`. If the given `value` is `binary`, `value` is returned. Values of the following types can be converted to a `binary` value:

-   `text`: A `binary` value from the text representation. Refer to `Binary.FromText` for details.

If `value` is of any other type, an error is returned.


## Examples

### Example #1
Get the `binary` value of `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
