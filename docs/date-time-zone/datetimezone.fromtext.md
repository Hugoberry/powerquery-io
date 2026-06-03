---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Creates a datetimezone from local, universal, and custom datetimezone formats.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Creates a `datetimezone` value from a textual representation, `text`. An optional `record` parameter, `options`, may be provided to specify additional properties. The `record` can contain the following fields:

-   `Format`: A `text` value indicating the format to use. For more details, go to https://go.microsoft.com/fwlink/?linkid=2180104 and https://go.microsoft.com/fwlink/?linkid=2180105. Omitting this field or providing `null` will result in parsing the date using a best effort.
-   `Culture`: When `Format` is not null, `Culture` controls some format specifiers. For example, in `"en-US"` `"MMM"` is `"Jan", "Feb", "Mar", ...`, while in `"ru-RU"` `"MMM"` is `"янв", "фев", "мар", ...`. When `Format` is `null`, `Culture` controls the default format to use. When `Culture` is `null` or omitted, `Culture.Current` is used.

To support legacy workflows, `options` may also be a text value. This has the same behavior as if `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Convert `"2010-12-31T01:30:00-08:00"` into a `datetimezone` value.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Convert using a custom format and the German culture.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Convert using ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
