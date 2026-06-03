---
title: Text.SplitAny
---

# Text.SplitAny


Returnerar en lista med textvärden som delas upp baserat på något av tecknen i avgränsaren.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Returnerar en lista med textvärden som resulterar från uppdelningen av ett textvärde baserat på något tecken i den angivna avgränsaren.

-   `text`: Textvärdet att koda.
-   `separators`: Avgränsartecknen som används för att dela upp texten.


## Examples

### Example #1
Skapa en lista från den angivna texten med de angivna avgränsartecknen.
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
