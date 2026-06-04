---
title: Text.SplitAny
---

# Text.SplitAny


Vrátí seznam textových hodnot rozdělený libovolnými znaky v oddělovači.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Vrací seznam textových hodnot, který je výsledkem rozdělení textové hodnoty na základě libovolného znaku zadaného v oddělovači.

-   `text`: Textová hodnota, která se má rozdělit
-   `separators`: Znaky oddělovače použité k rozdělení textu


## Examples

### Example #1
Vytvoří seznam z daného textu pomocí zadaných znaků oddělovače.
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
