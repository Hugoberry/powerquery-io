---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Az aktuális dátumot és időt adja vissza a helyi időzónában.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Egy `datetime` értéket ad vissza, amely a rendszeren beállított aktuális dátumra és időre van beállítva.  
  
A függvény által visszaadott érték attól függ, hogy a lekérdezést helyi számítógépen vagy online állapotban futtatja-e. Ha például az Amerikai Egyesült Államok csendes-óceáni időzónájában található rendszeren futtatja a lekérdezést, a Power Query Desktop a helyi számítógépen beállított dátumot és időt adja vissza. Ha azonban a lekérdezést a felhőben futtatja, Power Query Online az UTC-időt adja vissza, mert a felhőbeli virtuális gépeken beállított időpontot olvassa, amely mind UTC-nek van beállítva.


## Examples

### Example #1
A függvény meghívása Power Query Asztali verziót futtató helyi számítógépen.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
A függvény meghívása az online Power Query futó felhőben.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
