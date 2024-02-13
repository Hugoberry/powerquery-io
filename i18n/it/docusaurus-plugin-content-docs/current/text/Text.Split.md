---
title: Text.Split
---

# Text.Split


Divide il testo in un elenco di valori di testo in base al delimitatore specificato.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Restituisce un elenco di valori di testo risultante dalla suddivisione del valore di testo <code>text</code> in base al delimitatore specificato <code>separator</code>.


## Examples

### Example #1 
Creare un elenco dal valore di testo &#34;Name|Address|PhoneNumber&#34; delimitato da &#34;|&#34;.
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
