---
title: Text.SplitAny
---

# Text.SplitAny


Devolve unha lista de valores de texto, dividido por calquera dos caracteres do delimitador.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Devolve unha lista de valores de texto resultantes da división dun valor de texto en función de calquera carácter que se especificou no delimitador.

-   `text`: o valor de texto a dividir.
-   `separators`: os caracteres delimitadores que se usan para dividir o texto.


## Examples

### Example #1
Cree unha lista a partir do texto indicado utilizando os caracteres delimitadores que se especificaron.
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
