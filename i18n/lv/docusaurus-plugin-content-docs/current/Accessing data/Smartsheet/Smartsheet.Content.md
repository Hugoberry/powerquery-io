---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Atgriež datu tabulu no Smartsheet indeksa galapunkta.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Izsauc Smartsheet 2.0 REST API norādītajā galapunktā un transformē atgriezto datu elementu tabulā.


## Examples

### Example #1 
Atgādā lietotāju informācijas tabulu no Smartsheet API
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Smartsheet API atgrieztā lietotāju informācijas tabula
```



