---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Pateikiamas JSON rezultatas iš „Smartsheet“ API


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Iškviečia „Smartsheet 2.0“ REST API nurodytame galiniame punkte ir pateikia rezultatus kaip JSON įrašą.


## Examples

### Example #1 
Pateikiami duomenys iš lapų „Smartsheet“ API galinio punkto su papildomais nurodytais argumentais
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Lentelė su lapų informacija, kurią pateikė „Smartsheet“ API
```



