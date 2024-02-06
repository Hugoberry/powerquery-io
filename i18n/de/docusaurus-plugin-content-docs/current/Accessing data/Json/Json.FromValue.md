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

Generiert eine JSON-Darstellung eines angegebenen Werts "<code>value</code>" mit der durch "<code>encoding</code>" angegebenen Textcodierung. Wenn "<code>encoding</code>" nicht angegeben wird, wird UTF8 verwendet. Werte werden wie folgt dargestellt:<br /> <ul>        <li>NULL-, Text- und logische Werte werden als die entsprechenden JSON-Typen dargestellt.</li>        <li>Zahlen werden als Zahlen in JSON dargestellt. Nur <code>#infinity</code>, <code>-#infinity</code> und <code>#nan</code> werden in NULL konvertiert.</li>        <li>Listen werden als JSON-Arrays dargestellt.</li>        <li>Datensätze werden als JSON-Objekte dargestellt</li>        <li>Tabellen werden als ein Array von Objekten dargestellt.</li>        <li>Datums- und Uhrzeitangaben, datetime-, datetimezones-Werte und Dauerangaben werden als ISO-8601-Text dargestellt.</li>        <li>Binärwerte werden als base-64-codierter Text dargestellt.</li>        <li>Typen und Funktionen generieren einen Fehler.</li> </ul>    


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
