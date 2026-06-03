---
title: Time.From
---

# Time.From


Erstellt eine Uhrzeit auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Gibt einen `time`\-Wert auf der Grundlage des angegebenen Elements vom Typ „`value`“ zurück. Optional kann auch ein Element vom Typ „`culture`“ angegeben werden (Beispiel: „de-DE“). Besitzt das angegebene Element vom Typ „`value`“ den Wert `NULL`, wird von `Time.From` der Wert `NULL` zurückgegeben. Besitzt das angegebene Element vom Typ „`value`“ den Wert `time`, wird „`value`“ zurückgegeben. Werte folgender Art können in einen `time`\-Wert konvertiert werden:

-   `text`: Ein `time`\-Wert auf der Grundlage einer Textdarstellung. Ausführlichere Informationen finden Sie unter `Time.FromText`.
-   `datetime`: Die Uhrzeitkomponente von „`value`“.
-   `datetimezone`: Die Uhrzeitkomponente der lokalen datetime-Entsprechung von „`value`“.
-   `number`: Eine `time`\-Entsprechung für die durch „`value`“ ausgedrückte Anzahl anteiliger Tage. Ist „`value`“ negativ oder größer/gleich 1, wird ein Fehler zurückgegeben.

Handelt es sich bei „`value`“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1
Konvertiert `0.7575` in einen `time`\-Wert.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Konvertiert `#datetime(1899, 12, 30, 06, 45, 12)` in einen `time`\-Wert.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
