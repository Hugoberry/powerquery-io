---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Ustvari funkcijo, ki jo lahko prestreže rutina za obravnavo, določena v pogledu (prek funkcije Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Ustvari funkcijo na podlagi `function`, ki jo je mogoče obravnavati v pogledu, ustvarjenem s funkcijo `Table.View`.

Rutino za obravnavo `OnInvoke` funkcije `Table.View` lahko uporabite za določitev rutine za obravnavo za funkcijo pogleda.

Če ne določite rutine za obravnavo `OnInvoke`, če ta rutina ne obravnava funkcije pogleda ali če rutina za obravnavo prikaže sporočilo o napaki, je za pogled tako kot pri rutinah za obravnavo za vgrajene postopke uporabljen `function`.

Podrobnejši opis funkcije `Table.View` in funkcij pogleda po meri najdete v objavljeni dokumentaciji za povezovalnik po meri Power Query.



## Category
Binary
