---
title: Text.Split
---

# Text.Split


Divide el texto en una lista de valores de texto según un delimitador especificado.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Devuelve una lista de valores de texto resultantes de la división de un valor de texto basándose en el delimitador especificado.

-   `text`: Valor de texto que se va a dividir.
-   `separator`: Delimitador utilizado para dividir el texto. El delimitador puede ser un único carácter o una secuencia de caracteres. Si se usa una secuencia de caracteres, el texto solo se divide en instancias donde se produce la secuencia exacta.


## Examples

### Example #1
Crear una lista a partir del valor de texto delimitado "|" "Nombre|Dirección|NúmeroDeTeléfono”.
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
Cree una lista a partir del valor de texto mediante una secuencia de caracteres.
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
