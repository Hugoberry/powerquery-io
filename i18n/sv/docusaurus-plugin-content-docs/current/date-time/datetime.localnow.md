---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Returnerar aktuellt datum och tid i den lokala tidszonen.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Returnerar ett `datetime-` värde som angetts till systemets aktuella datum och tid.  
  
Värdet som returneras av den här funktionen beror på om du kör frågan på en lokal dator eller online. Om du till exempel kör din fråga på ett system i USA:s Pacific Time-zon returnerar Power Query Desktop datum och tid som angetts på den lokala datorn. Om du däremot kör din fråga i molnet returnerar Power Query Online UTC-tid eftersom den läser den tid som angetts på de virtuella molndatorerna, som alla är inställda på UTC.


## Examples

### Example #1
Aktivera den här funktionen på en lokal dator som kör Power Query Skrivbord.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Anropa den här funktionen i molnet som körs Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
