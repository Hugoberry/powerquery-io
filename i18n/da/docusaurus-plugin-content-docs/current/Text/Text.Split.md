---
title: Text.Split
---

# Text.Split


Opdeler tekst i en liste over tekstværdier ved hjælp af en angivet afgrænser.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Returnerer en liste over tekstværdier som et resultat af at opdele en tekstværdi <code>text</code> ved hjælp af den angivne afgrænser, <code>separator</code>.


## Examples

### Example #1 
Opret en liste ud fra tekstværdien &#34;Name|Address|PhoneNumber&#34; med afgrænseren &#34;|&#34;.
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
