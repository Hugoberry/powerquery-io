---
title: Text.SplitAny
---

# Text.SplitAny


Returns a list of text values, split on any of the characters in the delimiter.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Returns a list of text values resulting from the splitting of a text value based on any character specified in the delimiter.

-   `text`: The text value to split.
-   `separators`: The delimiter characters used to split the text.


## Examples

### Example #1
Create a list from the given text using the specified delimiter characters.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
