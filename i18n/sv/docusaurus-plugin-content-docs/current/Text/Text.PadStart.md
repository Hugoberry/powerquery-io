---
title: Text.PadStart
---

# Text.PadStart


## Description

Returnerar text med en angiven längd genom att fylla ut början av den angivna texten.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Returnerar ett <code>text</code>-värde som fylls ut till längden <code>count</code> genom att blanksteg infogas i början av textvärdet <code>text</code>.    Ett valfritt tecken, <code>character</code>, kan användas för att ange utfyllnadstecknet. Standardtecknet för utfyllnad är blanksteg.


## Examples

### Example #1 
Fyll ut början av ett textvärde så att det är 10 tecken långt.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Fyll ut början av ett textvärde med &#34;|&#34; så att det är 10 tecken långt.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
