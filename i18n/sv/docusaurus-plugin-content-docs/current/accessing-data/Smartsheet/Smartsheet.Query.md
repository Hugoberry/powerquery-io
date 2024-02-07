---
title: Smartsheet.Query
---

# Smartsheet.Query


Returnerar ett JSON-resultat från Smartsheet-API:et


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

Anropar Smartsheet 2.0 REST-API:et vid den angivna slutpunkten och returnerar resultaten som en JSON-post.


## Examples

### Example #1 
Hämtar data från bladens slutpunkt för Smartsheet-API:et med ytterligare angivna argument
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
En tabell med bladinformation så som den returneras av Smartsheet-API:et
```



