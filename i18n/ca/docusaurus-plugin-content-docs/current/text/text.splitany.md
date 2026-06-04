---
title: Text.SplitAny
---

# Text.SplitAny


Retorna una llista de valors de text, dividit en qualsevol dels caràcters del delimitador.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Retorna una llista de valors de text que resulta de dividir un valor de text basant-se en qualsevol caràcter especificat al delimitador.

-   `text`: valor de text que es dividirà.
-   `separators`: caràcters del delimitador utilitzats per dividir el text.


## Examples

### Example #1
Creeu una llista a partir del text indicat amb els caràcters de delimitador especificats.
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
