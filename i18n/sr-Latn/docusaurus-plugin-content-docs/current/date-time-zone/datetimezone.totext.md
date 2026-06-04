---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Vraća tekstualnu reprezentaciju vrednosti datuma i vremenske zone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Daje tekstualni prikaz `dateTimeZone`. Opcionalni `zapis` parametra, `options`, može se obezbediti za navođenje dodatnih svojstava. `culture` se koristi samo za zastarele radne tokove. `record` može da sadrži sledeća polja:

-   `Format`: Vrednost `text` koja označava format koji treba koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje `null` rezultiraće oblikovanjem datuma korišćenjem podrazumevane vrednosti koju definiše `Culture`.
-   `Culture`: Kada `Format` nije bez vrednosti, `Culture` kontroliše neke određivače formata. Na primer, u `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...`, dok je u `"ru-RU"` `"MMM"` `"янв", "фев", "мар", ...`. Kada je `Format` `null`, `Culture` kontroliše podrazumevani format koji će se koristiti. Kada je `Culture` `null` ili izostavljen, koristi se `Culture.Current`.

Za podršku zastarelih tokova posla, `options` i `culture` mogu da budu tekstualne vrednosti. Ovo ima isto ponašanje kao da je `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertuj `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` u `text` vrednost. *Izlaz rezultata može da se razlikuje u zavisnosti od trenutne kulture.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Konvertuj pomoću prilagođenog formata i nemačke kulture.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Konvertuj pomoću ISO 8601 obrasca.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
