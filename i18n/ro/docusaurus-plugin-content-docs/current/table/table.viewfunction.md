---
title: Table.ViewFunction
---

# Table.ViewFunction


Creează o funcție care poate fi interceptată de o rutină de tratare definită pe o vizualizare (prin Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Creează o funcție de vizualizare bazată pe `function`, care poate fi gestionată într-o vizualizare creată de `Table.View`.

Rutina de tratare `OnInvoke` a `Table.View` poate fi utilizată pentru a defini o rutină de tratare pentru funcția de vizualizare.

La fel ca în rutinele de tratare pentru operații încorporate, dacă nu este specificată nicio rutină de tratare `OnInvoke` sau dacă rutina de tratare declanșează o eroare, se aplică `function` în partea de sus a vizualizării.

Consultați documentația conectorului particularizat publicat Power Query pentru o descriere mai completă a `Table.View` și a funcțiilor de vizualizare particularizate.



## Category
Table.Table construction
