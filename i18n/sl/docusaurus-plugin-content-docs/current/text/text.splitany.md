---
title: Text.SplitAny
---

# Text.SplitAny


Vrne seznam besedilnih vrednosti, ki so razdeljene v katerem koli znaku v ločilu.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Vrne seznam besedilnih vrednosti, ki nastane z razdelitvijo besedilne vrednosti glede na kateri koli znak, ki je naveden v ločilu.

-   `text`: Besedilna vrednost za razdelitev.
-   `separators`: Znaki ločila, uporabljeni za razdelitev besedila.


## Examples

### Example #1
Ustvarite seznam iz danega besedila z določenimi znaki ločil.
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
