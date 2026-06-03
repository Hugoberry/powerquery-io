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

Met behulp van de opgegeven `identityProvider` wordt de `condition` omgezet in de lijst met identiteiten waarvoor `condition` de waarde `waar` retourneert in alle autorisatiecontexten met `identityProvider` als id-provider. Er wordt een fout gegenereerd als het onmogelijk is om `condition` te converteren naar een lijst met identiteiten (bijvoorbeeld als `condition` andere kenmerken dan gebruikers- of groeps-id's raadpleegt om een beslissing te nemen).

Houd er rekening mee dat de id-lijst de identiteiten bevat zoals ze worden weergegeven in `condition` en dat er geen normalisatie wordt toegepast (zoals groepsuitbreiding).



## Category
Accessing data
