---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Retorna una taula amb dades d&#39;un extrem del MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Fa una trucada a l'API del MailChimp, retorna una taula amb el conjunt de dades que en resulta i examina automàticament tots els resultats. Pot fer-se servir el paràmetre opcional entityName per als extrems de l'API sempre que l'extrem arrel i el paràmetre entityName principal de la resposta JSON no coincideixin.


## Examples

### Example #1 
Extreu una taula amb dades de l&#39;extrem de llistes de l&#39;API del MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Una taula amb dades de llista.
```


### Example #2 
Extreu una taula amb dades de l&#39;extrem de carpetes de campanya de l&#39;API del MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Una taula amb dades de les carpetes de campanya.
```



