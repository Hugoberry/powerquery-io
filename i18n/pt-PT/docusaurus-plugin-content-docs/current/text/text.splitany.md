---
title: Text.SplitAny
---

# Text.SplitAny


Devolve uma lista de valores de texto dividida em qualquer um dos carateres no delimitador.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Devolve uma lista de valores de texto resultantes da divisão de um valor de texto com base em qualquer caráter especificado no delimitador.

-   `text`: O valor de texto a dividir.
-   `separators`: Os carateres delimitadores utilizados para dividir o texto.


## Examples

### Example #1
Crie uma lista a partir do texto fornecido com os carateres delimitadores especificados.
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
