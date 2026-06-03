---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Restituisce un elenco di identità accettate dalla condizione.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Usando l'elemento `identityProvider` specificato, converte `condition` nell'elenco di identità per le quali `condition` restituisce `true` in tutti i contesti di autorizzazione con `identityProvider` come provider di identità. Viene restituito un errore se non è possibile convertire `condition` in un elenco di identità, ad esempio se `condition` consulta attributi diversi dalle identità di utenti o gruppi per prendere una decisione.

Tenere presente che l'elenco di identità rappresenta le identità così come vengono visualizzate in `condition` senza eseguire alcuna normalizzazione (come l'espansione gruppo).



## Category
Accessing data
