---
title: Text.SplitAny
---

# Text.SplitAny


Tiek atgriezts teksta vērtību saraksts, kas norobežotājā sadalīts jebkurā no rakstzīmēm.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Tiek atgriezts teksta vērtību saraksts, kas tiek iegūts, sadalot teksta vērtību, pamatojoties uz jebkuru norobežotājā norādīto rakstzīmi.

-   `text`: Sadalāmā teksta vērtība.
-   `separators`: Norobežotāja rakstzīmes, ko izmanto teksta sadalīšanai.


## Examples

### Example #1
Izveidojiet sarakstu no norādītā teksta, izmantojot norādītās norobežotāja rakstzīmes.
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
