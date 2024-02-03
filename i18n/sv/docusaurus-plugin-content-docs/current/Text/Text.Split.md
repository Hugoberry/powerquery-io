---
title: Text.Split
---

# Text.Split


## Description

Delar upp texten i en lista med textvärden baserat på en angiven avgränsare.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Returnerar en lista med textvärden som resulterar från uppdelningen av ett textvärde, <code>text</code>, baserat på den angivna avgränsaren, <code>separator</code>.


## Examples

### Example #1 
Skapa en lista från det &#34;|&#34;-avgränsade textvärdet &#34;Name|Address|PhoneNumber&#34;.
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
