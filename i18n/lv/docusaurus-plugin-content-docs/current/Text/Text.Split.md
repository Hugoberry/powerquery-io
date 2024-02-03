---
title: Text.Split
---

# Text.Split


## Description

Teksts tiek sadalīts teksta vērtību sarakstā, pamatojoties uz norādīto norobežotāju.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Tiek atgriezts teksta vērtību saraksts, kas tiek iegūts, sadalot teksta vērtību <code>text</code>, pamatojoties uz norādīto norobežotāju <code>separator</code>.


## Examples

### Example #1 
Izveidojiet sarakstu no &#34;|&#34; norobežotās teksta vērtības &#34;Name|Address|PhoneNumber&#34;.
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
