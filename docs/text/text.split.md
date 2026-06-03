---
title: Text.Split
---

# Text.Split


Splits text into a list of text values based upon a specified delimiter.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Returns a list of text values resulting from the splitting of a text value based on the specified delimiter.

-   `text`: The text value to split.
-   `separator`: The delimiter used to split the text. The delimiter can be either a single character or a sequence of characters. If a sequence of characters is used, the text is split only at instances where the exact sequence occurs.


## Examples

### Example #1
Create a list from the "|" delimited text value "Name|Address|PhoneNumber".
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Create a list from the text value using a sequence of characters.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
