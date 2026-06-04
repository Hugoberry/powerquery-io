---
title: Text.SplitAny
---

# Text.SplitAny


Pateikiamas sąrašas tekstinių reikšmių, išskaidytų ties bet kuriais skyriklio simboliais.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Pateikiamas sąrašas tekstinių reikšmių, gautų išskaidžius teksto reikšmę pagal bet kurį simbolį, nurodytą skyriklyje.

-   `text`: teksto reikšmė, kurią reikia skaidyti.
-   `separators`: skyriklio simboliai, naudojami tekstui skaidyti.


## Examples

### Example #1
Sukurkite sąrašą iš pateikto teksto naudodami nurodytus skyriklius.
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
