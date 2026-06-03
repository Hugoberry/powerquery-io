---
title: Text.SplitAny
---

# Text.SplitAny


Retorna uma lista de valores de texto, divididos em qualquer caractere do delimitador.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Retorna uma lista de valores de texto resultantes da separação de um valor de texto com base em qualquer caractere especificado no delimitador.

-   `text`: o valor de texto a ser dividido.
-   `separators`: os caracteres delimitadores usados para dividir o texto.


## Examples

### Example #1
Crie uma lista a partir do texto fornecido usando os caracteres delimitadores especificados.
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
