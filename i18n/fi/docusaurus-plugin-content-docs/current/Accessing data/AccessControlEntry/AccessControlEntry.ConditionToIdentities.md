---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Palauttaa luettelon käyttäjätiedoista, jotka ehto hyväksyy.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Käyttäen määritettyä kohdetta <code>identityProvider</code> muuntaa kohteen <code>condition</code> luetteloksi käyttäjätietoja, joille <code>condition</code> palauttaisi arvon <code>true</code> kaikissa valtuutuskonteksteissa, joissa <code>identityProvider</code> on käyttäjätietopalvelu. Virhe käynnistetään, jos kohdetta <code>condition</code> ei voi muuntaa käyttäjätietojen luetteloksi. Esimerkki tästä on tilanne, jossa <code>condition</code> hakee muista määritteistä kuin käyttäjän ja ryhmän käyttäjätiedoista tietoja päätöksen tekemistä varten.<br />    Huomaa, että käyttäjätietojen luettelo edustaa käyttäjätietoja sellaisina kuin ne näkyvät kohteessa <code>condition</code>, eikä normalisointia (kuten ryhmän laajennusta) suoriteta niille.<br />



## Category
Accessing data
