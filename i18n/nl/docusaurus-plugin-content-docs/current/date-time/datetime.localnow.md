---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Retourneert de huidige datum en tijd in de lokale tijdzone.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Retourneert een `datetime` waarde die is ingesteld op de huidige datum en tijd op het systeem.  
  
De waarde die door deze functie wordt geretourneerd, is afhankelijk van of u de query uitvoert op een lokale computer of online. Als u uw query bijvoorbeeld uitvoert op een systeem in de Tijdzone van de Amerikaanse Pacific, retourneert Power Query Desktop de datum en tijd die op uw lokale computer zijn ingesteld. Als u uw query echter uitvoert in de cloud, retourneert Power Query Online de UTC-tijd omdat de tijd wordt gelezen die is ingesteld op de virtuele cloudmachines, die allemaal zijn ingesteld op UTC.


## Examples

### Example #1
Roep deze functie aan op een lokale computer waarop Power Query Desktop wordt uitgevoerd.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Roep deze functie aan in de cloud waarop Power Query Online wordt uitgevoerd.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
