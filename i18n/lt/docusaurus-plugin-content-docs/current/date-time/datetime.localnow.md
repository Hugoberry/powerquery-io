---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Pateikiama vietinės laiko juostos dabartinė data ir laikas.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Pateikiamas `datos ir laiko` reikšmių rinkinys, skirtas dabartinei sistemos datai ir laikui.  
  
Šios funkcijos pateikta reikšmė priklauso nuo to, ar savo užklausą naudojate vietiniame kompiuteryje, ar internete. Pvz., jei savo užklausą paleisite sistemoje, esančioje JAV Ramiojo vandenyno laiko juostoje, „Power Query“ Desktop" pateiks jūsų vietiniame kompiuteryje nustatytą datą ir laiką. Tačiau jei užklausą paleisite debesyje, "„Power Query“ Online" pateiks UTC laiką, nes nuskaitomas debesies virtualiųjų kompiuterių, kurie visi nustatyti kaip UTC, nustatytas laikas.


## Examples

### Example #1
Iškviesti šią funkciją vietiniame kompiuteryje, kuriame veikia „Power Query“ desktop".
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Iškviesti šią funkciją debesyje, kuriame veikia „Power Query“ Online".
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
