---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Vrne trenutni datum in uro v lokalnem časovnem pasu.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Vrne vrednost `datetime`, nastavljeno na trenutni datum in uro v sistemu.  
  
Vrednost, ki jo vrne ta funkcija, je odvisna od tega, ali izvajate poizvedbo v lokalnem računalniku ali spletu. Če na primer zaženete poizvedbo v sistemu, ki je v pacifiškem časovnem pasu v ZDA, Power Query Desktop vrne datum in uro, nastavljeno v lokalnem računalniku. Če poizvedbo zaženete v oblaku, Power Query Online vrne čas UTC, ker bere čas, nastavljen v navideznih računalnikih v oblaku, ki so nastavljeni na UTC.


## Examples

### Example #1
Prikliči to funkcijo v lokalnem računalniku, v Power Query namizju.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Prikliči to funkcijo v oblaku, v katerem Power Query spletu.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
