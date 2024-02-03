---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Palauttaa JSON-tuloksen Smartsheet-ohjelmointirajapinnasta


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Tekee kutsun Smartsheet 2.0 REST -ohjelmointirajapinnalle määritetyssä päätepisteessä ja palauttaa tulokset JSON-tietueena.


## Examples

### Example #1 
Noutaa tiedot taulukoiden Smartsheet-ohjelmointirajapinnan päätepisteestä käyttäen määritettyjä lisäargumentteja
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Smartsheet-ohjelmointirajapinnan palauttama taulukkotietojen taulukko
```



