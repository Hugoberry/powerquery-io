---
title: Text.SplitAny
---

# Text.SplitAny


Returnerer en liste over tekstværdier, hvor tegnene er opdelt ved hjælp af afgrænseren.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Returnerer en liste over tekstværdier, der er resultatet af opdelingen af en tekstværdi baseret på et tegn, der er angivet i afgrænseren.

-   `text`: Den tekstværdi, der skal opdeles.
-   `separators`: De afgrænsertegn, der bruges til at opdele teksten.


## Examples

### Example #1
Opret en liste ud fra den angivne tekst ved hjælp af de specificerede afgrænsertegn.
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
