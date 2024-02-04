---
title: Text.Split
---

# Text.Split


## Description

Teilt Text auf der Grundlage eines angegebenen Trennzeichens in eine Liste mit Textwerten auf.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Gibt eine Liste mit Textwerten zurück, für die ein Textwert (<code>text</code>) auf der Grundlage des angegebenen Trennzeichens (<code>separator</code>) aufgeteilt wurde.


## Examples

### Example #1 
Erstellt eine Liste auf der Grundlage des Textwerts &#34;Name|Address|PhoneNumber&#34; mit dem Trennzeichen &#34;|&#34;.
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
