---
title: DateTimeZone.From
---

# DateTimeZone.From


Skapar ett datetimezone-värde från det angivna värdet.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Skapar en `datetimezone` av det angivna värdet.

-   `value`: Värdet som används för att skapa en `datetimezone`.
-   `culture`: (valfritt) Kulturen som ska användas när kolumntyperna transformeras (till exempel ”en-US”).

Värden av följande typer kan omvandlas till ett `datetimezone`\-värde:

-   `text`: Returnerar ett `datetimezone`\-värde från textrepresentationen. Mer information finns i `DateTimeZone.FromText`.
-   `date`: Returnerar ett `datetimezone`\-värde med `value` som datumkomponent, `12:00:00 AM` som tidskomponent och förskjutningen som motsvarar den lokala tidszonen.
-   `datetime`: Returnerar ett `datetimezone`\-värde med `value` som datetime och förskjutningen som motsvarar den lokala tidszonen.
-   `datetimezone`: Returnerar `value`.
-   `time`: Returnerar ett `datetimezone`\-värde med datumet motsvarande OLE Automation-datumet för `0` som datumkomponent, `value` som tidskomponent och förskjutningen som motsvarar den lokala tidszonen. OLE Automation-datumet består av ett flyttal vars heltalskomponent är antalet dagar före eller efter midnatt den 30 december 1899, och vars fraktionella komponent representerar tiden den dagen dividerat med 24. Till exempel representeras midnatt den 31 december 1899 av 1,0. 06.00 1 januari 1900 representeras av 2,25. Midnatt den 29 december 1899 representeras av -1,0, och 06.00 den 29 december 1899 representeras av -1,25. Basvärdet är midnatt den 30 december 1899. Minimivärdet är midnatt den 1 januari 0100. Det maximala värdet är det sista ögonblicket den 31 december 9999.
-   `number`: Returnerar ett `datetimezone`\-värde med datetime-värdet motsvarande OLE Automation-datumet uttryckt med `value` och förskjutningen som motsvarar den lokala tidszonen.
-   `null`: Returnerar `null`.

Om `value` är av någon annan typ returneras ett fel.  
  
Värdet av förskjutningen som motsvarar den lokala tidszonen är olika när den här funktionen körs lokalt jämfört med när den körs online. När den körs lokalt returneras den lokala tidszonen. När den körs online returneras UTC-tidszonen (+00:00).


## Examples

### Example #1
Konvertera textrepresentationen av ett datum, en tidpunkt och en tidszon till ett `datetimezone`\-värde.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Konvertera textrepresentationen av ett brasilianskt portugisiskt datum, en tidpunkt och en tidszon till ett `datetimezone`\-värde.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Konvertera ett tal som representerar 1 januari 2025 kl. 12:00 till ett `datetimezone`\-värde. Tidszonen i resultatet beror på om exemplet körs lokalt eller online.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
