---
title: Json.FromValue
---

# Json.FromValue


Generiert eine JSON-Darstellung für einen vorgegebenen Wert.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Generiert eine JSON-Darstellung eines angegebenen Werts „`value`“ mit der durch „`encoding`“ angegebenen Textcodierung. Wenn „`encoding`“ nicht angegeben wird, wird UTF8 verwendet. Werte werden wie folgt dargestellt:

-   NULL-, Text- und logische Werte werden als die entsprechenden JSON-Typen dargestellt
-   Zahlen werden als Zahlen in JSON dargestellt, nur `#infinity`, `-#infinity` und `#nan` werden in NULL konvertiert
-   Listen werden als JSON-Arrays dargestellt
-   Datensätze werden als JSON-Objekte dargestellt
-   Tabellen werden als ein Array von Objekten dargestellt
-   Datums- und Uhrzeitangaben, datetime-, datetimezones-Werte und Dauerangaben werden als ISO-8601-Text dargestellt
-   Binärwerte werden als base-64-codierter Text dargestellt
-   Typen und Funktionen generieren einen Fehler


## Examples

### Example #1
Konvertiert einen komplexen Wert in einen JSON-Wert.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
