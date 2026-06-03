---
title: Text.SplitAny
---

# Text.SplitAny


Zwraca listę wartości tekstowych powstałą w wyniku wykonania podziału przy dowolnym ze znaków w ograniczniku.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Zwraca listę wartości tekstowych wynikających z podziału wartości tekstowej na podstawie dowolnego znaku określonego w ograniczniku.

-   `text`: wartość tekstowa do podzielenia.
-   `separators`: znaki ogranicznika używane do dzielenia tekstu.


## Examples

### Example #1
Utwórz listę na podstawie danego tekstu przy użyciu określonych znaków ogranicznika.
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
