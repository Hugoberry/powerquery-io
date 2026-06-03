---
title: Text.Split
---

# Text.Split


Divide o texto em uma lista de valores de texto com base em um delimitador especificado.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Retorna uma lista de valores de texto resultantes da separação de um valor de texto com base no delimitador especificado.

-   `text`: o valor de texto a ser dividido.
-   `separator`: o delimitador usado para dividir o texto. O delimitador pode ser um único caractere ou uma sequência de caracteres. Se uma sequência de caracteres for usada, o texto será dividido somente nas instâncias em que a sequência exata ocorrer.


## Examples

### Example #1
Crie uma lista a partir do valor de texto delimitado por "|", "Name|Address|PhoneNumber".
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Crie uma lista a partir do valor de texto usando uma sequência de caracteres.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
