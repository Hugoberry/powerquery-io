---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Vrátí seznam identit, které bude podmínka přijímat.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Pomocí zadaného `identityProvider` převede `condition` na seznam identit, pro které by `condition` vrátilo `true` ve všech kontextech autorizace, ve kterých je poskytovatel identity `identityProvider`. Pokud `condition` není možné převést na seznam identit, je vyvolána chyba – například pokud `condition` při rozhodování konzultuje jiné atributy než identity uživatele nebo skupiny.

Upozorňujeme, že tento seznam identit představuje identity tak, jak je vnímá `condition`, a není na nich prováděna žádná normalizace (například rozšíření skupiny).



## Category
Accessing data
