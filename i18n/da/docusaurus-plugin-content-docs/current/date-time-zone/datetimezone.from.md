---
title: DateTimeZone.From
---

# DateTimeZone.From


Opretter en datetimezone ud fra den angivne værdi.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Opretter en `datetimezone` ud fra den angivne værdi.

-   `value`: Den værdi, der bruges til at oprette en `datetimezone`.
-   `culture`: (Valgfrit) Den kultur, der skal bruges ved transformering af værdien (f.eks. "en-US").

Værdier af følgende typer kan konverteres til en `datetimezone` værdi:

-   `text`: Returnerer en værdi af typen `datetimezone` fra tekstrepræsentation. Se `DateTimeZone.FromText` for at få flere oplysninger.
-   `date`: Returnerer en `datetimezone` med `value` som datokomponent, `12:00:00` som tidskomponent og den forskydning, der svarer til den lokale tidszone.
-   `datetime`: Returnerer en `datetimezone` med `value` som datetime og den forskydning, der svarer til den lokale tidszone.
-   `datetimezone`: Returnerer `value`.
-   `time`: Returnerer en `datetimezone` med den dato, der svarer til OLE Automation-datoen for `0` som datokomponent, `value` som tidskomponenten og den forskydning, der svarer til den lokale tidszone. OLE Automation-datoen består af et flydende tal, hvis integralkomponent er antallet af dage før eller efter midnat, 30. december 1899, og hvis decimalkomponent repræsenterer klokkeslættet på den pågældende dag divideret med 24. Midnat den 31. december 1899 repræsenteres f.eks. af 1,0; 6. januar 1900 er repræsenteret af 2,25; midnat den 29. december 1899 er repræsenteret af -1,0; og 6 A.M., 29. december 1899 repræsenteres af -1,25. Grundværdien er midnat, 30. december 1899. Minimumværdien er midnat den 1. januar 0100. Maksimumværdien er det sidste øjeblik af 31. december 9999.
-   `number`: Returnerer en `datetimezone` med den datetime, der svarer til OLE Automation Date, angivet af `value` og den forskydning, der svarer til den lokale tidszone.
-   `null`: Returnerer `null`.

Hvis `value` er af en anden type, returneres en fejl.  
  
Værdien af den forskydning, der svarer til den lokale tidszone, er forskellig, når du kører denne funktion lokalt i stedet for at køre den online. Når den køres lokalt, returneres den lokale tidszone. Når du kører online, returneres UTC-tidszonen (+00:00).


## Examples

### Example #1
Konvertér tekstrepræsentationen af en dato, et klokkeslæt og en tidszone til en værdi af typen `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Konvertér tekstrepræsentationen af portugisisk (Brasilien) dato, klokkeslæt og tidszone til en værdi af typen `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Konvertér et tal, der repræsenterer 1. januar 2025 kl. 22:00, til en værdi af typen `datetimezone`. Tidszonen i resultatet afhænger af, om eksemplet køres lokalt eller online.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
