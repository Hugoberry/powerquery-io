---
title: Text.SplitAny
---

# Text.SplitAny


Returnează o listă de valori text, divizate după oricare dintre caracterele din delimitator.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Returnează o listă de valori text care rezultă din scindarea unei valori text pe baza oricărui caracter specificat în delimitator.

-   `text`: valoarea text de scindat.
-   `separators`: caracterele delimitatorului utilizate pentru a scinda textul.


## Examples

### Example #1
Creați o listă din textul dat utilizând caracterele delimitatoare specificate.
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
