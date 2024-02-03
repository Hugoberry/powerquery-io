---
title: Text.Split
---

# Text.Split


## Description

Divide texto nunha lista de valores de texto baseándose nun delimitador especificado.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Devolve unha lista de valores de texto resultantes da división dun valor de texto <code>text</code> baseándose no delimitador especificado, <code>separator</code>.


## Examples

### Example #1 
Crear unha lista do valor de texto &#34;Nome | Dirección | PhoneNumber&#34; delimitado por &#34;|&#34;.
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
