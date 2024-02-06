---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Hiermee wordt een lijst met identiteiten geretourneerd die aan de voorwaarde voldoen.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Met behulp van de opgegeven <code>identityProvider</code> wordt de <code>condition</code> omgezet in de lijst met identiteiten waarvoor <code>condition</code> de waarde <code>waar</code> retourneert in alle autorisatiecontexten met <code>identityProvider</code> als id-provider. Er wordt een fout gegenereerd als het onmogelijk is om <code>condition</code> te converteren naar een lijst met identiteiten (bijvoorbeeld als <code>condition</code> andere kenmerken dan gebruikers- of groeps-id's raadpleegt om een beslissing te nemen). <br /> Houd er rekening mee dat de id-lijst de identiteiten bevat zoals ze worden weergegeven in <code>condition</code> en dat er geen normalisatie wordt toegepast (zoals groepsuitbreiding). <br />



## Category
Accessing data
