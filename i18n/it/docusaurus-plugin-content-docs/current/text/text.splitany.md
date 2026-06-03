---
title: Text.SplitAny
---

# Text.SplitAny


Restituisce un elenco di valori di testo, suddiviso in base a uno dei caratteri nel delimitatore.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Restituisce un elenco di valori testo risultante dalla suddivisione del valore testo in base a qualsiasi carattere specificato nel delimitatore.

-   `text`: valore testo da suddividere.
-   `separators`. caratteri di delimitazione utilizzati per suddividere il testo.


## Examples

### Example #1
Creare un elenco dal testo fornito utilizzando i caratteri di delimitazione specificati.
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
