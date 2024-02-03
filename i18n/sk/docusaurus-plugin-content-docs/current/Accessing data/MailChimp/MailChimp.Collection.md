---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Vráti tabuľku s údajmi z koncového bodu služby MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Uskutoční volanie do rozhrania API služby MailChimp a vráti výslednú množinu údajov ako tabuľku. Automaticky sa bude prechádzať stranami so všetkými výsledkami. V koncových bodoch rozhrania API, keď sa koreňový koncový bod a hlavný parameter entityName v odpovedi JSON nezhodujú, je možné použiť voliteľný parameter entityName.


## Examples

### Example #1 
Stiahne tabuľku s údajmi z koncového bodu zoznamov rozhrania API služby MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Tabuľka s údajmi zo zoznamu.
```


### Example #2 
Stiahne tabuľku s údajmi z koncového bodu priečinkov kampaní rozhrania API služby MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Tabuľka s údajmi z priečinkov kampaní.
```



