---
title: DateTimeZone.From
---

# DateTimeZone.From


Kreira datum i vremensku zonu od date vrednosti.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Kreira `datetimezone` od date vrednosti.

-   `value`: Vrednost koja se koristi za kreiranje `datetimezone`.
-   `culture`: (Opcionalno) Kultura koju treba koristiti prilikom transformacije vrednosti (na primer, „en-US”).

Vrednosti sledećih tipova mogu da se konvertuju u vrednost `date`:

-   `text`: Daje `datetimezone` vrednost iz tekstualne izjave. Pogledajte `Date.FromText` za detalje.
-   `date`: Daje `datetimezone` sa `value` kao komponentom datuma, `12:00:00 AM` kao komponentu vremena i pomak odgovarajuće lokalne vremenske zone.
-   `date`: Daje `datetimezone` sa `value` kao komponentom datuma, i pomak odgovarajuće lokalne vremenske zone.
-   `datetimezone`: Daje `value`.
-   `time`: Daje `datetimezone` sa datumom koji je isti kao datum OLE automatizacije `0` kao komponente datuma, `value` kao komponentu vremena i pomak koji odgovara lokalnoj vremenskoj zoni. Datum OLE automatizacije se sastoji od broja sa pokretnim zarezom čija je integralna komponenta broj dana pre ili posle ponoći, 30. decembra 1899. godine, a čija decimalna komponenta predstavlja vreme tog dana podeljeno sa 24. Na primer, ponoć, 31. decembra 1899. godine predstavljena je sa 1,0; 6:00 ujutru, 1. januara 1900. godine predstavljeno je sa 2,25; ponoć, 29. decembra 1899. godine predstavljena je sa -1,0; i 6:00 ujutru, 29. decembra 1899. godine predstavljeno je sa -1,25. Osnovna vrednost je ponoć, 30. decembra 1899. godine. Minimalna vrednost je ponoć, 1. januara 0100. godine. Maksimalna vrednost je poslednji trenutak 31. decembra 9999. godine.
-   `number`: Daje `datetimezone` sa datumom i vremenom jednakim kao OLE datum automatizacije koji je izrazio `value` i pomak koji odgovara lokalnoj vremenskoj zoni.
-   `null`: Daje `null`.

Ako je `value` bilo kog drugog tipa, vraća se greška.  
  
Vrednost pomaka koji odgovara lokalnoj vremenskoj zoni razlikuje se prilikom lokalnog pokretanja ove funkcije, nasuprot pokretanju na mreži. Kada se pokreće lokalno, vraća se lokalna vremenska zona. Kada se pokrene na mreži, vraća se UTC vremenska zona (+00:00).


## Examples

### Example #1
Konvertujte tekstualnu izjavu datuma, vremena i vremenske zone u vrednost `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Konvertujte tekstualnu izjavu brazilskog portugalskog datuma, vremena i vremenske ose u `datetimezone` vrednost.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Konvertujte broj koji predstavlja 1. januar 2025. u 12:00 u `datetimezone` vrednost. Vremenska zona u rezultatu zavisi od toga da li se primer pokreće lokalno ili na mreži.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
