---
title: Text.SplitAny
---

# Text.SplitAny


Vráti zoznam textových hodnôt rozdelený v niektorom znaku v oddeľovači.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Vráti zoznam textových hodnôt, ktorý je výsledkom rozdelenia textovej hodnoty na základe ľubovoľného znaku zadaného v oddeľovači.

-   `text`: Textová hodnota na rozdelenie.
-   `separators`: Znaky oddeľovača použité na rozdelenie textu.


## Examples

### Example #1
Vytvorí zoznam z daného textu pomocou zadaných znakov oddeľovača.
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
