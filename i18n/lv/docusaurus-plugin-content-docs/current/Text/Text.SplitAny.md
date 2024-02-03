---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Tiek atgriezts teksta vērtību saraksts, kas norobežotājā sadalīts jebkurā no rakstzīmēm.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Tiek atgriezts teksta vērtību saraksts, kas tiek iegūts, sadalot teksta vērtību <code>text</code>, pamatojoties uz jebkuru rakstzīmi norādītajā norobežotājā <code>separators</code>.


## Examples

### Example #1 
Izveidojiet sarakstu no teksta vērtības &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
