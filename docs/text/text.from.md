---
title: Text.From
---

# Text.From


Creates a text value from the given value.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Returns the text representation of a specified value.

-   `value`: The value to convert to text. The value can be a `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration`, or `binary` value. If the given value is `null`, this function returns `null`.
-   `culture`: (Optional) The culture to use when converting the value to text (for example, "en-US").


## Examples

### Example #1
Create a text value from the number 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Get the text equivalent of the specified date and time.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Get the German text equivalent of the specified date and time.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Get a binary value from text encoded as hexadecimal and change the value back to text.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Get the rows in the table that contain data for France and convert the dates to text using the French culture.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
