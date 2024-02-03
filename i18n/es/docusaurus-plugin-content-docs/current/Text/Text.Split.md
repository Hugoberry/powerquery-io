---
title: Text.Split
---

# Text.Split


## Description

Divide el texto en una lista de valores de texto según un delimitador especificado.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Devuelve una lista de los valores de texto resultantes de dividir un valor de texto <code>text</code> según el delimitador especificado, <code>separator</code>.


## Examples

### Example #1 
Crear una lista a partir del valor de texto delimitado &#34;|&#34; &#34;Nombre|Dirección|NúmeroDeTeléfono”.
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




## Category
Text.Transformations
