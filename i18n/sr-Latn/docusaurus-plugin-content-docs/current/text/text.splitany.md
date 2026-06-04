---
title: Text.SplitAny
---

# Text.SplitAny


Vraća listu tekstualnih vrednosti, podeljenu kod bilo kog znaka u okviru znaka za razgraničavanje.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Vraća listu tekstualnih vrednosti koje nastaju usled razdeljivanja tekstualne vrednosti na osnovu bilo kog znaka u okviru navedenog znaka za razgraničavanje.

-   `text`Vrednost teksta koji treba razdeliti.
-   `separators`: Znakovi za razgraničavanje koji se koriste za razdvajanje teksta.


## Examples

### Example #1
Kreirajte listu iz datog teksta koristeći navedene znakove za razgraničavanje.
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
