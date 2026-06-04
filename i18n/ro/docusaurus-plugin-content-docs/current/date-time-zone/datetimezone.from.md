---
title: DateTimeZone.From
---

# DateTimeZone.From


Creează o valoare datetimezone din valoarea dată.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Creează o valoare `datetimezone` din valoarea dată.

-   `value`: Valoarea utilizată pentru a crea o valoare `datetimezone`.
-   `culture`: (Opțional) Cultura de utilizat la transformarea valorii (de exemplu, „ro-RO”).

Valorile din următoarele tipuri pot fi convertite într-o valoare `datetimezone`:

-   `text`: Returnează o valoare `datetimezone` din reprezentarea textuală. Consultați `DateTimeZone.FromText` pentru detalii.
-   `date`: Returnează o valoare `datetimezone` cu `value` ca componentă dată, `12:00:00 AM` ca componentă de timp și decalajul corespunzător fusului orar local.
-   `datetime`: Returnează o valoare `datetimezone` cu `value` ca datetime și decalajul corespunzător fusului orar local.
-   `datetimezone`: Returnează `value`.
-   `time`: Returnează o valoare `datetimezone` cu data echivalentă cu data de automatizare OLE `0` ca componentă dată, `value` ca componentă de timp și decalajul corespunzător fusului orar local. Data de automatizare OLE constă dintr-un număr în virgulă mobilă a cărui componentă integrală este numărul de zile înainte sau după miezul nopții, 30 decembrie 1899 și a cărui componentă fracționară reprezintă ora din ziua respectivă împărțită la 24. De exemplu, miezul nopții, 31 decembrie 1899 este reprezentat de 1.0; 6 A.M., 1 ianuarie 1900 este reprezentat prin 2.25; miezul nopții, 29 decembrie 1899 este reprezentat de -1.0; și 6 A.M., 29 decembrie 1899 este reprezentat de -1.25. Valoarea de bază este miezul nopții, 30 decembrie 1899. Valoarea minimă este miezul nopții, 1 ianuarie 0100. Valoarea maximă este ultimul moment din 31 decembrie 9999.
-   `number`: Returnează o valoare `datetimezone` cu valoarea datetime echivalentă cu data de automatizare OLE exprimată prin `value` și decalajul corespunzător fusului orar local.
-   `null`: Returnează `null`.

Dacă `value` este de orice alt tip, se returnează o eroare.  
  
Valoarea decalajului corespunzător fusului orar local este diferită atunci când rulează această funcție local, spre deosebire de rularea sa online. Când este rulat local, se returnează fusul orar local. Când este rulat online, se returnează fusul orar UTC (+00:00).


## Examples

### Example #1
Efectuați conversia reprezentării textuale a unei valori dată, oră și fus orar într-o valoare `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Convertiți reprezentarea textuală a datei, orei și fusului orar pentru portugheza braziliană într-o valoare `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Efectuați conversia unui număr reprezentând 1 ianuarie 2025, la ora 12:00, într-o valoare `datetimezone`. Fusul orar din rezultat depinde de rularea locală sau online a exemplului.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
