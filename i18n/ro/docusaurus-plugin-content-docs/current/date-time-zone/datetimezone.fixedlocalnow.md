---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Returnează data şi ora curente în fusul orar local. Această valoare este fixă şi nu se va modifica cu apelurile succesive.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Returnează o valoare `datetime` setată la data şi ora curente ale sistemului. Valoarea returnată conţine informaţii despre fusul orar care reprezintă fusul orar local. Această valoare este fixă şi nu se va modifica cu apeluri succesive, cum ar fi DateTimeZone.LocalNow, care ar putea returna diferite valori în cursul executării unei expresii.



## Category
DateTimeZone
