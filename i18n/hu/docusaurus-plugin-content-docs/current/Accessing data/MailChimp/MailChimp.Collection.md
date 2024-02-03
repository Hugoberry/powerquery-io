---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Egy táblát ad vissza a MailChimp-végpontból származó adatokkal.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Hívást küld a MailChimp API-ra, és az eredményül kapott adatkészletet egy táblában adja vissza. Automatikusan átlapozza az eredményeket. Az opcionális entityName paraméter olyan API-végpontok esetén használható, ahol a gyökérszintű végpont és a JSON-válaszban szereplő fő entityName nem egyezik.


## Examples

### Example #1 
Lekér egy táblát a MailChimp API listáinak végpontjából származó adatokkal.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Listaadatokat tartalmazó tábla.
```


### Example #2 
Lekér egy táblát a MailChimp API kampánymappáinak végpontjából származó adatokkal.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Kampánymappaadatokat tartalmazó tábla.
```



