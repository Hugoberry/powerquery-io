---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Restituisce un elenco di identità accettate dalla condizione.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Usando l'elemento <code>identityProvider</code> specificato, converte <code>condition</code> nell'elenco di identità per le quali <code>condition</code> restituisce <code>true</code> in tutti i contesti di autorizzazione con <code>identityProvider</code> come provider di identità. Viene restituito un errore se non è possibile convertire <code>condition</code> in un elenco di identità, ad esempio se <code>condition</code> consulta attributi diversi dalle identità di utenti o gruppi per prendere una decisione.<br />    Tenere presente che l'elenco di identità rappresenta le identità così come vengono visualizzate in <code>condition</code> senza eseguire alcuna normalizzazione (come l'espansione gruppo).<br />



## Category
Accessing data
