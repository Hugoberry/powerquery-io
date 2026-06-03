---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Gibt das aktuelle Datum und die aktuelle Uhrzeit in der lokalen Zeitzone zurück.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Gibt einen `datetime-` Wert zurück, der auf das aktuelle Datum und die aktuelle Uhrzeit im System festgelegt ist.  
  
Der von dieser Funktion zurückgegebene Wert hängt davon ab, ob Sie Ihre Abfrage auf einem lokalen Computer oder online ausführen. Wenn Sie Ihre Abfrage beispielsweise auf einem System in der Zeitzone "USA Pacific" ausführen, gibt Power Query Desktop das datums- und uhrzeitdeutische Datum und die Uhrzeit zurück, die auf Ihrem lokalen Computer festgelegt sind. Wenn Sie Ihre Abfrage jedoch in der Cloud ausführen, gibt Power Query Online UTC-Zeit zurück, da sie die auf den virtuellen Cloudcomputern festgelegte Zeit liest, die alle auf UTC festgelegt sind.


## Examples

### Example #1
Rufen Sie diese Funktion auf einem lokalen Computer auf, auf dem Power Query Desktop ausgeführt wird.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Rufen Sie diese Funktion in der Cloud auf, in der Power Query Online ausgeführt wird.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
