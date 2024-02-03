---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Returnează un tabel de date de la un punct final de index Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Efectuează un apel la API-ul Smartsheet 2.0 REST la punctul final specificat și transformă elementul de date returnat într-un tabel.


## Examples

### Example #1 
Extrage un tabel cu informații de utilizator de la API-ul Smartsheet
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Un tabel cu informații de utilizator, așa cum este returnat de API-ul Smartsheet
```



