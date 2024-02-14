---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Returnerer den aktuelle dato og det aktuelle klokkeslæt i den lokale tidszone. Denne værdi er fast og ændres ikke ved efterfølgende opkald.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Returnerer en værdi for <code>datetime</code>, der er angivet til den aktuelle dato og det aktuelle klokkeslæt i systemet. Den returnerede værdi indeholder oplysninger om tidszone, der repræsenterer den lokale tidszone. Denne værdi er fast og ændres ikke ved efterfølgende opkald i modsætning til DateTimeZone.LocalNow, som kan returnere forskellige værdier i løbet af kørslen af et udtryk.



## Category
DateTimeZone
