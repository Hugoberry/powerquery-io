---
title: Time.From
---

# Time.From


Creates a time from the given value.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Returns a `time` value from the given `value`. An optional `culture` may also be provided (for example, "en-US"). If the given `value` is `null`, `Time.From` returns `null`. If the given `value` is `time`, `value` is returned. Values of the following types can be converted to a `time` value:

-   `text`: A `time` value from textual representation. Refer to `Time.FromText` for details.
-   `datetime`: The time component of the `value`.
-   `datetimezone`: The time component of the local datetime equivalent of `value`.
-   `number`: A `time` equivalent to the number of fractional days expressed by `value`. If `value` is negative or greater or equal to 1, an error is returned.

If `value` is of any other type, an error is returned.


## Examples

### Example #1
Convert `0.7575` to a `time` value.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Convert `#datetime(1899, 12, 30, 06, 45, 12)` to a `time` value.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
