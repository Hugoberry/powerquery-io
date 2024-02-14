---
title: Text.PadEnd
---

# Text.PadEnd


Returnerar text med en angiven längd genom att fylla ut slutet av den angivna texten.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Returnerar ett <code>text</code>-värde som fylls ut till längden <code>count</code> genom att blanksteg infogas i slutet av textvärdet <code>text</code>.    Ett valfritt tecken, <code>character</code>, kan användas för att ange utfyllnadstecknet. Standardtecknet för utfyllnad är blanksteg.


## Examples

### Example #1 
Fyll ut slutet av ett textvärde så att det är 10 tecken långt.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Fyll ut slutet av ett textvärde med &#34;|&#34; så att det är 10 tecken långt.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
