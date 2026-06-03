---
title: Text.SplitAny
---

# Text.SplitAny


Devuelve una lista de valores de texto, dividida con alguno de los caracteres del delimitador.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Devuelve una lista de valores de texto resultantes de la división de un valor de texto en función de cualquier carácter especificado en el delimitador.

-   `text`: Valor de texto que se va a dividir.
-   `separators`: Los caracteres delimitadores usados para dividir el texto.


## Examples

### Example #1
Cree una lista a partir del texto especificado con los caracteres delimitadores especificados.
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
