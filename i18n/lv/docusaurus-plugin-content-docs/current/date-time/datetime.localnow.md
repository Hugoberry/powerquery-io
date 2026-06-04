---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Atgriež pašreizējo datumu un laiku vietējā laika joslā.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Atgriež `datetime` vērtību kopu uz sistēmas pašreizējo datumu un laiku.  
  
Šīs funkcijas atgrieztā vērtība ir atkarīga no tā, vai vaicājumu palaižat lokālajā datorā vai tiešsaistē. Piemēram, ja izpildāt vaicājumu sistēmā, kas atrodas ASV Klusā okeāna laika joslā, Power Query Darbvirsma atgriež lokālajā datorā iestatīto datumu un laiku. Tomēr, ja izpildīsit vaicājumu mākonī, pakalpojums Power Query Online atgriež UTC laiku, jo tiek nolasīts laiks, kas iestatīts mākoņa virtuālajās mašīnās, un tas viss ir iestatīts uz UTC.


## Examples

### Example #1
Izsaukt šo funkciju lokālajā datorā, kurā darbojas Power Query darbvirsma.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Izmantojiet šo funkciju mākonī, kurā darbojas Power Query Tiešsaistē.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
