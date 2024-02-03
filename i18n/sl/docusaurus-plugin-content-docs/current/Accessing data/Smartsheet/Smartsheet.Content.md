---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Vrne tabelo s podatki iz končne točke indeksiranja storitve Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Pokliče vmesnik REST API storitve Smartsheet 2.0 na navedeni končni točki in pretvori vrnjen podatkovni element v tabelo.


## Examples

### Example #1 
Pridobi tabelo s podatki o uporabnikih iz vmesnika API storitve Smartsheet
```powerquery
Smartsheet.Content("uporabniki")
```

Result: 
```powerquery
Tabela s podatki o uporabnikih, ki jo vrne vmesnik API storitve Smartsheet
```



