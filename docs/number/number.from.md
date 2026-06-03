---
title: Number.From
---

# Number.From


Creates a number from the given value.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returns a `number` value from the given `value`. An optional `culture` may also be provided (for example, "en-US"). If the given `value` is `null`, `Number.From` returns `null`. If the given `value` is `number`, `value` is returned. Values of the following types can be converted to a `number` value:

-   `text`: A `number` value from textual representation. Common text formats are handled ("15", "3,423.10", "5.0E-10"). Refer to `Number.FromText` for details.
-   `logical`: 1 for `true`, 0 for `false`.
-   `datetime`: A double-precision floating-point number that contains an OLE Automation date equivalent.
-   `datetimezone`: A double-precision floating-point number that contains an OLE Automation date equivalent of the local date and time of `value`.
-   `date`: A double-precision floating-point number that contains an OLE Automation date equivalent.
-   `time`: Expressed in fractional days.
-   `duration`: Expressed in whole and fractional days.

If `value` is of any other type, an error is returned.


## Examples

### Example #1
Get the `number` value of `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Get the `number` value of `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Get the `number` value of `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
