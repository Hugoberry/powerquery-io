---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Creează o funcție care poate fi interceptată de o rutină de tratare definită într-o vizualizare (prin Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Creează o funcție de vizualizare bazată pe `function`, care poate fi gestionată într-o vizualizare creată de `Binary.View`.

Rutina de tratare `OnInvoke` a `Binary.View` poate fi utilizată pentru a defini o rutină de tratare pentru funcția de vizualizare.

La fel ca în rutinele de tratare pentru operații încorporate, dacă nu este specificată nicio rutină de tratare `OnInvoke` sau dacă nu tratează funcția de vizualizare sau dacă rutina de tratare declanșează o eroare, se aplică `function` peste vizualizare.

Consultați documentația conectorului personalizat Power Query publicat pentru o descriere mai completă a `Binary.View` și a funcțiilor de vizualizare personalizate.



## Category
Binary
