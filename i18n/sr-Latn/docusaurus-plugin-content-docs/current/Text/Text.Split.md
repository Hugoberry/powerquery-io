---
title: Text.Split
---

# Text.Split


## Description

Deli tekst na listu tekstualnih vrednosti na osnovu navedenog znaka za razgraničavanje.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Vraća listu tekstualnih vrednosti koje nastaju kao rezultat razdvajanja tekstualne vrednosti <code>text</code> na osnovu navedenog znaka za razgraničavanje, <code>separator</code>.


## Examples

### Example #1 
Kreiranje liste od tekstualne vrednosti „Name|Address|PhoneNumber“ razgraničene pomoću znaka „|“.
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
