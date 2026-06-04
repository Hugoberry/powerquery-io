---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Palauttaa luettelon käyttäjätiedoista, jotka ehto hyväksyy.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Käyttäen määritettyä kohdetta `identityProvider` muuntaa kohteen `condition` luetteloksi käyttäjätietoja, joille `condition` palauttaisi arvon `true` kaikissa valtuutuskonteksteissa, joissa `identityProvider` on käyttäjätietopalvelu. Virhe käynnistetään, jos kohdetta `condition` ei voi muuntaa käyttäjätietojen luetteloksi. Esimerkki tästä on tilanne, jossa `condition` hakee muista määritteistä kuin käyttäjän ja ryhmän käyttäjätiedoista tietoja päätöksen tekemistä varten.

Huomaa, että käyttäjätietojen luettelo edustaa käyttäjätietoja sellaisina kuin ne näkyvät kohteessa `condition`, eikä normalisointia (kuten ryhmän laajennusta) suoriteta niille.



## Category
Accessing data
