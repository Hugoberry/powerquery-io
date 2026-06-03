---
title: Text.PadStart
---

# Text.PadStart


Returnerar text med en angiven längd genom att fylla ut början av den angivna texten.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Returnerar ett `text`\-värde som fylls ut till längden `count` genom att blanksteg infogas i början av textvärdet `text`. Ett valfritt tecken, `character`, kan användas för att ange utfyllnadstecknet. Standardtecknet för utfyllnad är blanksteg.


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
Fyll ut början av ett textvärde med "|" så att det är 10 tecken långt.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
