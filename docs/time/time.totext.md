---
title: Time.ToText
---

# Time.ToText


Returns a textual representation of the time value.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returns a textual representation of `time`. An optional `record` parameter, `options`, may be provided to specify additional properties. `culture` is only used for legacy workflows. The `record` can contain the following fields:

-   `Format`: A `text` value indicating the format to use. For more details, go to https://go.microsoft.com/fwlink/?linkid=2180104 and https://go.microsoft.com/fwlink/?linkid=2180105. Omitting this field or providing `null` will result in formatting the date using the default defined by `Culture`.
-   `Culture`: When `Format` is not null, `Culture` controls some format specifiers. For example, in `"en-US"` `"tt"` is `"AM" or "PM"`, while in `"ar-EG"` `"tt"` is `"ص" or "م"`. When `Format` is `null`, `Culture` controls the default format to use. When `Culture` is `null` or omitted, `Culture.Current` is used.

To support legacy workflows, `options` and `culture` may also be text values. This has the same behavior as if `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Convert `#time(01, 30, 25)` into a `text` value. *Result output may vary depending on current culture.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Convert using a custom format and the German culture.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Convert using standard time format.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
