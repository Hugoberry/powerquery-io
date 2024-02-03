---
title: Text.Split
---

# Text.Split


## Description

Divideix text en una llista de valors de text basant-se en un delimitador especificat.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Retorna una llista de valors de text que resulta de dividir un valor de text <code>text</code> basant-se en el delimitador especificat, <code>separator</code>.


## Examples

### Example #1 
Crea una llista a partir del valor de text delimitat amb &#34;|&#34;, &#34;Nom|Adreça|NúmeroDeTelèfon&#34;.
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
