---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Pateikiama lentelė su duomenimis iš „MailChimp“ galinio punkto.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Kreipiamasi į „MailChimp“ API ir gautas duomenų rinkinys pateikiamas kaip lentelė. Automatiškai pereinama per visus rezultatus. API galiniuose punktuose galima naudoti pasirinktinį parametrą entityName, kai nesutampa JSON atsako šakninis galinis punktas ir pagrindinis entityName.


## Examples

### Example #1 
Pateikiama lentelė su duomenimis iš „MailChimp“ API sąrašų galinio punkto.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Lentelė su sąrašo duomenimis.
```


### Example #2 
Pateikiama lentelė su duomenimis iš „MailChimp“ API kampanijos aplankų galinio punkto.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Lentelė su kampanijos aplankų duomenimis.
```



