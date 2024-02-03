---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Creează o funcție care poate fi interceptată de o rutină de tratare definită pe o vizualizare (prin Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Creează o funcție de vizualizare bazată pe <code>function</code>, care poate fi gestionată într-o vizualizare creată de <code>Table.View</code>.<br />Rutina de tratare <code>OnInvoke</code> a <code>Table.View</code> poate fi utilizată pentru a defini o rutină de tratare pentru funcția de vizualizare.<br />La fel ca în rutinele de tratare pentru operații încorporate, dacă nu este specificată nicio rutină de tratare <code>OnInvoke</code> sau dacă rutina de tratare declanșează o eroare, se aplică <code>function</code> în partea de sus a vizualizării.<br />Consultați documentația conectorului particularizat publicat Power Query pentru o descriere mai completă a <code>Table.View</code> și a funcțiilor de vizualizare particularizate.<br />



## Category
Table.Table construction
