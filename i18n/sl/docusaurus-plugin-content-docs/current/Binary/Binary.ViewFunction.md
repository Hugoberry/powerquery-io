---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Ustvari funkcijo, ki jo lahko prestreže rutina za obravnavo, določena v pogledu (prek funkcije Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Ustvari funkcijo na podlagi <code>function</code>, ki jo je mogoče obravnavati v pogledu, ustvarjenem s funkcijo <code>Table.View</code>.<br />Rutino za obravnavo <code>OnInvoke</code> funkcije <code>Table.View</code> lahko uporabite za določitev rutine za obravnavo za funkcijo pogleda.<br />Če ne določite rutine za obravnavo <code>OnInvoke</code>, če ta rutina ne obravnava funkcije pogleda ali če rutina za obravnavo prikaže sporočilo o napaki, je za pogled tako kot pri rutinah za obravnavo za vgrajene postopke uporabljen <code>function</code>.<br />Podrobnejši opis funkcije <code>Table.View</code> in funkcij pogleda po meri najdete v objavljeni dokumentaciji za povezovalnik po meri Power Query.<br />



## Category
Binary
