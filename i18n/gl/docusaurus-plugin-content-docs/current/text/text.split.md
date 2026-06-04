---
title: Text.Split
---

# Text.Split


Divide texto nunha lista de valores de texto baseándose nun delimitador especificado.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Devolve unha lista de valores de texto resultantes da división dun valor de texto en función do delimitador que se especificou.

-   `text`: o valor de texto a dividir.
-   `separator`: o delimitador que se usa para dividir o texto. O delimitador pode ser un só carácter ou unha secuencia de caracteres. Se se utiliza unha secuencia de caracteres, o texto só se divide nas instancias nas que se produce a secuencia exacta.


## Examples

### Example #1
Crear unha lista do valor de texto "Nome | Dirección | PhoneNumber" delimitado por "|".
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
Cree unha lista a partir do valor do texto utilizando unha secuencia de caracteres.
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
