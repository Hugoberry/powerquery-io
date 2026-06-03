---
title: DateTime.From
---

# DateTime.From


Erstellt einen datetime-Wert auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Gibt einen `datetime`\-Wert auf der Grundlage des angegebenen Elements vom Typ „`value`“ zurück. Optional kann auch ein Element vom Typ „`culture`“ angegeben werden (Beispiel: „de-DE“). Besitzt das angegebene Element vom Typ „`value`“ den Wert `NULL`, wird von `DateTime.From` der Wert `NULL` zurückgegeben. Besitzt das angegebene Element vom Typ „`value`“ den Wert `datetime`, wird „`value`“ zurückgegeben. Werte folgender Art können in einen `datetime`\-Wert konvertiert werden:

-   `text`: Ein `datetime`\-Wert auf der Grundlage einer Textdarstellung. Ausführlichere Informationen finden Sie unter `DateTime.FromText`.
-   `date`: Ein `datetime`\-Wert mit „`value`“ als Datumskomponente und `12:00:00 AM` als Uhrzeitkomponente.
-   `datetimezone`: Die lokale `datetime`\-Entsprechung von „`value`“.
-   `time`: Ein `datetime`\-Wert mit der Datumsentsprechung des OLE-Automatisierungsdatums von `0` als Datumskomponente und „`value`“ als Uhrzeitkomponente.
-   `number`: Eine durch „`value`“ ausgedrückte `datetime`\-Entsprechung des OLE-Automatisierungsdatums.

Handelt es sich bei „`value`“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1
Konvertiert `#time(06, 45, 12)` in einen `datetime`\-Wert.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Konvertiert `#date(1975, 4, 4)` in einen `datetime`\-Wert.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
