---
title: DateTimeZone.From
---

# DateTimeZone.From


Erstellt einen datetimezone-Wert auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Erstellt einen `datetimezone`\-Wert auf der Grundlage des angegebenen Werts.

-   `value`: Der Wert, der zum Erstellen eines `datetimezone`\-Werts verwendet wird.
-   `culture`: (Optional) Die Kultur, die beim Transformieren des Werts verwendet werden soll (z. B. „en-US“).

Werte der folgenden Typen können in einen `datetimezone`\-Wert konvertiert werden:

-   `text`: Gibt einen `datetimezone`\-Wert aus der Textdarstellung zurück. Weitere Informationen finden Sie unter `DateTimeZone.FromText`.
-   `date`: Gibt einen `datetimezone`\-wert mit `value` als Datumskomponente zurück, `12:00:00 AM` als Zeitkomponente und dem Offset, der der lokalen Zeitzone entspricht.
-   `datetime`: Gibt einen `datetimezone`\-Wert mit `value` als Datetime und dem Offset zurück, der der lokalen Zeitzone entspricht.
-   `datetimezone`: Gibt `value` zurück.
-   `time`: Gibt einen `datetimezone`\-Wert mit dem Datum, das dem OLE-Automatisierungsdatum von `0` entspricht, als Datumskomponente, `value` als Zeitkomponente und dem Offset, der der lokalen Zeitzone entspricht. Das OLE-Automatisierungsdatum besteht aus einer Gleitkommazahl, deren ganzzahlige Komponente die Anzahl der Tage vor oder nach Mitternacht am 30. Dezember 1899 ist und deren Bruchkomponente die Uhrzeit an diesem Tag geteilt durch 24 darstellt. Beispielsweise wird Mitternacht am 31. Dezember 1899 durch 1,0 dargestellt; 6 Uhr morgens am 1. Januar 1900 wird durch 2,25 dargestellt; Mitternacht am 29. Dezember 1899 wird durch -1,0 dargestellt; und 6 Uhr morgens am 29. Dezember 1899 wird durch -1,25 dargestellt. Der Basiswert ist Mitternacht am 30. Dezember 1899. Der Mindestwert ist Mitternacht am 1. Januar 0100. Der Höchstwert ist der letzte Moment des 31. Dezember 9999.
-   `number`: Gibt einen `datetimezone`\-Wert mit dem Datetime-Äquivalent des OLE-Automatisierungsdatums zurück, das durch `value` ausgedrückt wird, und dem Offset, der der lokalen Zeitzone entspricht.
-   `null`: Gibt `null` zurück.

Wenn `value` einen anderen Typ aufweist, wird ein Fehler zurückgegeben.  
  
Der Wert des Offsets, der der lokalen Zeitzone entspricht, unterscheidet sich, wenn diese Funktion lokal im Vergleich zur Online-Ausführung ausgeführt wird. Bei lokaler Ausführung wird die lokale Zeitzone zurückgegeben. Bei der Online-Ausführung wird die UTC-Zeitzone (+00:00) zurückgegeben.


## Examples

### Example #1
Konvertieren Sie die Textdarstellung eines Datums, einer Uhrzeit und einer Zeitzone in einen `datetimezone`\-Wert.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Konvertieren Sie die Textdarstellung eines Datums, einer Uhrzeit und einer Zeitzone im brasilianischen Portugiesisch in einen `datetimezone`\-Wert.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Konvertiert eine Zahl, die den 1. Januar 2025 um 12:00 Uhr darstellt, in einen `datetimezone`\-Wert. Die Zeitzone im Ergebnis hängt davon ab, ob das Beispiel lokal oder online ausgeführt wird.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
