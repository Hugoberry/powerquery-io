---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Returnerar en tabell med data från en Smartsheet-indexslutpunkt.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Anropar Smartsheet 2.0 REST-API:et vid den angivna slutpunkten och transformerar dataelementet till en tabell.


## Examples

### Example #1 
Hämtar en tabell med användarinformation från Smartsheet-API:et
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
En tabell med användarinformation så som den returneras av Smartsheet-API:et
```



