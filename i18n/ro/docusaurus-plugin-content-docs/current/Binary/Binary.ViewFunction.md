---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Creează o funcție care poate fi interceptată de o rutină de tratare definită într-o vizualizare (prin Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Creează o funcție de vizualizare bazată pe <code>function</code>, care poate fi gestionată într-o vizualizare creată de <code>Binary.View</code>.<br />Rutina de tratare <code>OnInvoke</code> a <code>Binary.View</code> poate fi utilizată pentru a defini o rutină de tratare pentru funcția de vizualizare.<br />La fel ca în rutinele de tratare pentru operații încorporate, dacă nu este specificată nicio rutină de tratare <code>OnInvoke</code> sau dacă nu tratează funcția de vizualizare sau dacă rutina de tratare declanșează o eroare, se aplică <code>function</code> peste vizualizare.<br />Consultați documentația conectorului personalizat Power Query publicat pentru o descriere mai completă a <code>Binary.View</code> și a funcțiilor de vizualizare personalizate.<br />



## Category
Binary
