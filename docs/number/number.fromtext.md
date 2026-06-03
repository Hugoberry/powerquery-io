---
title: Number.FromText
---

# Number.FromText


Creates numbers from common text formats ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Returns a `number` value from the given text value, `text`.

-   `text`: The textual representation of a number value. The representation must be in a common number format, such as "15", "3,423.10", or "5.0E-10".
-   `culture`: An optional culture that controls how `text` is interpreted (for example, "en-US").


## Examples

### Example #1
Get the number value of `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Get the number value of `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
