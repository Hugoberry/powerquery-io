---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Palauttaa tietojen taulukon Smartsheet-indeksin päätepisteestä.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Tekee kutsun Smartsheet 2.0 REST -ohjelmointirajapinnalle määritetyssä päätepisteessä ja muuntaa palautetun tietoelementin taulukoksi.


## Examples

### Example #1 
Noutaa käyttäjätietojen taulukon Smartsheet-ohjelmointirajapinnasta
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Smartsheet-ohjelmointirajapinnan palauttama käyttäjätietojen taulukko
```



