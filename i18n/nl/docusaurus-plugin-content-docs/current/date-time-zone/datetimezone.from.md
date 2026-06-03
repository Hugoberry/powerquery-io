---
title: DateTimeZone.From
---

# DateTimeZone.From


Maakt een datum-/tijdzone van de opgegeven waarde.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Hiermee maakt u een `datetimezone` van de opgegeven waarde.

-   `value`: de waarde die wordt gebruikt om een `datetimezone` te maken.
-   `culture`: (Optioneel) De te gebruiken cultuur bij het transformeren van de waarde (bijvoorbeeld 'en-US').

Waarden van de volgende typen kunnen worden geconverteerd naar een `datetimezone` waarde:

-   `text` retourneert een `datetimezone` waarde uit tekstweergave. Raadpleeg `DateTimeZone.FromText` voor meer informatie.
-   `date` retourneert een `datetimezone` met `value` als datumonderdeel, `12:00:00 am` als het tijdonderdeel en de offset die overeenkomt met de lokale tijdzone.
-   `datetime`: retourneert een `datetimezone` met `value` als datum/tijd en de offset die overeenkomt met de lokale tijdzone.
-   `datetimezone` retourneert `value`.
-   `time` retourneert een `datetimezone` met het datumequivalent van de OLE Automation-datum van `0` als datumonderdeel, `value` als tijdonderdeel en de offset die overeenkomt met de lokale tijdzone. De OLE Automation-datum bestaat uit een drijvende-kommagetal waarvan het integraal onderdeel het aantal dagen is vóór of na 30 december 1899 middernacht, en waarvan het fractionele onderdeel de tijd op die dag vertegenwoordigt gedeeld door 24. Bijvoorbeeld: middernacht 31 december 1899 wordt vertegenwoordigd door 1,0; 06:00 uur, 1 januari 1900 wordt vertegenwoordigd door 2,25; middernacht 29 december 1899 wordt vertegenwoordigd door -1,0; en 06:00 uur, 29 december 1899 wordt vertegenwoordigd door -1,25. De basiswaarde is 30 december 1899 middernacht. De minimumwaarde is 1 januari 0100 middernacht. De maximumwaarde is het laatste moment van 31 december 9999.
-   `number`: retourneert een `datetimezone` met het datum/tijd-equivalent van de OLE Automation-datum uitgedrukt door `value` en de offset die overeenkomt met de lokale tijdzone.
-   `null`: retourneert `null`.

Als `value` van een ander type is, wordt er een fout geretourneerd.  
  
De waarde van de offset die overeenkomt met de lokale tijdzone is anders wanneer deze functie lokaal wordt uitgevoerd, in plaats van dat deze online wordt uitgevoerd. Wanneer de functie lokaal wordt uitgevoerd, wordt de lokale tijdzone geretourneerd. Wanneer de functie online wordt uitgevoerd, wordt de UTC-tijdzone (+00:00) geretourneerd.


## Examples

### Example #1
Converteer de tekstweergave van een datum, tijd en tijdzone naar een `datetimezone` waarde.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Converteer de tekstweergave van Braziliaans-Portugees datum, tijd en tijdzone naar een `datetimezone` waarde.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Converteer een getal dat 1 januari 2025 middernacht vertegenwoordigt in een `datetimezone` waarde. De tijdzone in het resultaat is afhankelijk van de lokale of online uitvoering van het voorbeeld.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
