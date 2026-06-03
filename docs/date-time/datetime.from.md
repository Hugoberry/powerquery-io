---
title: DateTime.From
---

# DateTime.From


Creates a datetime from the given value.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Returns a `datetime` value from the given `value`. An optional `culture` may also be provided (for example, "en-US"). If the given `value` is `null`, `DateTime.From` returns `null`. If the given `value` is `datetime`, `value` is returned. Values of the following types can be converted to a `datetime` value:

-   `text`: A `datetime` value from textual representation. Refer to `DateTime.FromText` for details.
-   `date`: A `datetime` with `value` as the date component and `12:00:00 AM` as the time component.
-   `datetimezone`: The local `datetime` equivalent of `value`.
-   `time`: A `datetime` with the date equivalent of the OLE Automation Date of `0` as the date component and `value` as the time component.
-   `number`: A `datetime` equivalent of the OLE Automation Date expressed by `value`.

If `value` is of any other type, an error is returned.


## Examples

### Example #1
Convert `#time(06, 45, 12)` to a `datetime` value.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Convert `#date(1975, 4, 4)` to a `datetime` value.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
