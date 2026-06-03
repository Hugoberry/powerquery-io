---
title: Text.Split
---

# Text.Split


Divide texto numa lista de valores de texto com base num delimitador especificado.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Devolve uma lista de valores de texto resultantes da divisão de um valor de texto com base no delimitador especificado.

-   `text`: O valor de texto a dividir.
-   `separator`: O delimitador utilizado para dividir o texto. O delimitador pode ser um único caráter ou uma sequência de carateres. Se for utilizada uma sequência de carateres, o texto é dividido apenas nas instâncias em que a sequência exata ocorre.


## Examples

### Example #1
Criar uma lista a partir do valor de texto delimitado por "|" "Nome|Endereço|NúmeroTelefone".
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
Crie uma lista a partir do valor de texto através de uma sequência de carateres.
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
