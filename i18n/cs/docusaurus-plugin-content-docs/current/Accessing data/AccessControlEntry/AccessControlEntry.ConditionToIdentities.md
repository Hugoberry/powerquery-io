---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Vrátí seznam identit, které bude podmínka přijímat.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Pomocí zadaného <code>identityProvider</code> převede <code>condition</code> na seznam identit, pro které by <code>condition</code> vrátilo <code>true</code> ve všech kontextech autorizace, ve kterých je poskytovatel identity <code>identityProvider</code>. Pokud <code>condition</code> není možné převést na seznam identit, je vyvolána chyba – například pokud <code>condition</code> při rozhodování konzultuje jiné atributy než identity uživatele nebo skupiny.<br />    Upozorňujeme, že tento seznam identit představuje identity tak, jak je vnímá <code>condition</code>, a není na nich prováděna žádná normalizace (například rozšíření skupiny).<br />



## Category
Accessing data
