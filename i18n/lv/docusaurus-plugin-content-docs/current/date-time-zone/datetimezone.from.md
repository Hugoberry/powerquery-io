---
title: DateTimeZone.From
---

# DateTimeZone.From


Izveido datetimezone vērtību no sniegtās vērtības.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Izveido `datetimezone` no dotās vērtības.

-   `value`: vērtība, kas tiek izmantota, lai izveidotu `datetimezone`.
-   `culture`: (Neobligāti) Kultūra, kas jāizmanto, transformējot vērtību (piemēram, “en-US”).

Šo tipu vērtības var konvertēt par `datetimezone` vērtību:

-   `text`: atgriež `datetimezone` vērtību no teksta atveidojuma. Lai uzzinātu detalizētu informāciju, skatiet `DateTimeZone.FromText`.
-   `date`: atgriež `datetimezone` ar `value` kā datuma komponentu, `12:00:00 AM` kā laika komponentu, un nobīdi, kas atbilst vietējai laika joslai.
-   `datetime`: atgriež `datetimezone` ar `value` vērtību kā datumu/laiku, un nobīdi, kas atbilst vietējai laika joslai.
-   `datetimezone`: atgriež `value`.
-   `time`: atgriež `datetimezone` ar datumu, kas atbilst OLE automatizācijas datumam `0` kā datuma komponentu, `value` kā laika komponentu, un nobīdi, kas atbilst vietējai laika joslai. OLE automatizācijas datums sastāv no peldošā komata skaitļa, kura integrālā komponente ir dienu skaits pirms vai pēc 1899. gada 30. decembra pusnakts, un kura daļskaitļa komponente apzīmē laiku šajā dienā, dalītu ar 24. Piemēram, 1899. gada 31. decembra pusnakti apzīmē 1,0; 1900. gada 1. janvāra plkst. 06:00 apzīmē 2,25; 1899. gada 29. decembra pusnakti apzīmē -1,0; un 1899. gada 29. decembra plkst. 06:00 apzīmē -1,25. Pamatvērtība ir 1899. gada 30. decembra pusnakts. Minimālā vērtība ir 0100. gada 1. janvāra pusnakts. Maksimālā vērtība ir 9999. gada 31. decembra pēdējais brīdis.
-   `number`: atgriež `datetimezone` ar OLE automatizācijas datuma datuma/laika ekvivalentu, kas izteikts ar `value`, un nobīdi, kas atbilst vietējai laika joslai.
-   `null`: atgriež `null`.

Ja vērtībai `value` ir kāds cits tips, tiek atgriezta kļūda.  
  
Nobīdes vērtība, kas atbilst vietējai laika joslai, atšķiras, ja šī funkcija tiek palaista lokāli, salīdzinot ar to, ja tā tiek palaista tiešsaistē. Ja izpilde notiek lokāli, tiek atgriezta vietējā laika josla. Kad darbojas tiešsaistē, tiek atgriezta UTC laika josla (+00:00).


## Examples

### Example #1
Pārvērtiet datuma, laika un laika joslas teksta attēlojumu par `datetimezone` vērtību.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Konvertēt Brazīlijas portugāļu datuma, laika un laika joslas tekstuālo attēlojumu uz `datetimezone` vērtību.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Konvertēt skaitli, kas apzīmē 2025. gada 1. janvāri plkst. 12:00 uz `datetimezone` vērtību. Rezultāta laika josla ir atkarīga no tā, vai piemērs tiek izpildīts lokāli vai tiešsaistē.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
