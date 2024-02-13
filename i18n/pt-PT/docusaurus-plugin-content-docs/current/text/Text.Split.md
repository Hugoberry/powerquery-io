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

Devolve uma lista de valores de texto resultante da divisão de um valor de texto <code>text</code> com base no delimitador especificado, <code>separator</code>.


## Examples

### Example #1 
Criar uma lista a partir do valor de texto delimitado por &#34;|&#34; &#34;Nome|Endereço|NúmeroTelefone&#34;.
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
