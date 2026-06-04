---
title: Binary.ViewError
---

# Binary.ViewError


Vytvorí upravený záznam chyby, ktorý nespustí náhradné riešenie, keď ho vyvolá obslužná rutina definovaná v zobrazení (prostredníctvom Binary.View).


## Syntax

```powerquery
Binary.ViewError(
    errorRecord as record
) as record
```


## Remarks

Vytvorí upravený záznam chyby z `errorRecord`, ktorý nespustí fallback, keď ho vyvolá handler definovaný v pohľade (prostredníctvom Binary.View).



## Category
Binary
