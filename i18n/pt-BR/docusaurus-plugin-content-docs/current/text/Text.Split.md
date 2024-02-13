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

Retorna uma lista de valores de texto resultantes da divisão de um valor de texto <code>text</code> com base no delimitador especificado, <code>separator</code>.


## Examples

### Example #1 
Crie uma lista a partir do valor de texto delimitado por &#34;|&#34;, &#34;Name|Address|PhoneNumber&#34;.
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
