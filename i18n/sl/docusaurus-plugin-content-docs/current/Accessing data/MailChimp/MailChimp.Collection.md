---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Vrne tabelo s podatki iz končne točke storitve MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Pokliče vmesnik API storitve MailChimp API in vrne ustvarjeni nabor podatkov v obliki tabele. Samodejno se premika po vseh rezultatih. Izbirni parameter "entityName" lahko uporabite za končne točke vmesnika API, kjer se korenska končna točka in glavni parameter "entityName" v odgovoru JSON ne ujemata.


## Examples

### Example #1 
Pridobi tabelo s podatki iz vmesnika API s končno točko seznamov v storitvi MailChimp.
```powerquery
MailChimp.Collection("seznami")
```

Result: 
```powerquery
Tabela s podatki seznamov.
```


### Example #2 
Pridobi tabelo s podatki iz vmesnika API s končno točko map akcij v storitvi MailChimp.
```powerquery
MailChimp.Collection("mape akcij", "mape")
```

Result: 
```powerquery
Tabela s podatki map akcij.
```



