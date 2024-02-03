---
title: Text.Split
---

# Text.Split


## Description

Splitst tekst in een lijst tekstwaarden op basis van een opgegeven scheidingsteken.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Retourneert een lijst met tekstwaarden die het resultaat is van het splitsen van een tekstwaarde <code>text</code> op basis van het opgegeven scheidingsteken, <code>separator</code>.


## Examples

### Example #1 
Een lijst maken van de volgende tekstwaarde met het scheidingsteken &#34;|&#34;: &#34;Naam|Adres|Telefoonnummer&#34;.
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
