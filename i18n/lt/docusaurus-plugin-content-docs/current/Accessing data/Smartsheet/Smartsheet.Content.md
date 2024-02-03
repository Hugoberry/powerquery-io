---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Pateikiama duomenų iš „Smartsheet“ rodyklės galinio punkto lentelė.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Iškviečia „Smartsheet 2.0“ REST API nurodytame galiniame punkte ir transformuoja duomenų elementą, grąžintą į lentelę.


## Examples

### Example #1 
Pateikiama vartotojų informacijos iš „Smartsheet“ API lentelė
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Lentelė su vartotojų informacija, kurią pateikė „Smartsheet“ API
```



