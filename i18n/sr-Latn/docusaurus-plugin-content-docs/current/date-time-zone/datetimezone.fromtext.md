---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Kreira datum i vremensku zonu iz lokalnih, univerzalnih i prilagođenih formata datuma i vremenske zone.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Kreira `datetimezone` vrednost iz tekstualnog prikaza, `text`. Za određivanje dodatnih svojstava može se navesti opcionalni parametar `record`, `options`. `record` može da sadrži sledeća polja:

-   `Format`: Vrednost `text` koja označava format koji treba koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje `null` rezultiraće raščlanjivanjem datuma korišćenjem najboljeg napora.
-   `Culture`: Kada `Format` nije bez vrednosti, `Culture` kontroliše neke određivače formata. Na primer, u `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...`, dok je u `"ru-RU"` `"MMM"` `"янв", "фев", "мар", ...`. Kada je `Format` `null`, `Culture` kontroliše podrazumevani format koji će se koristiti. Kada je `Culture` `null` ili izostavljen, koristi se `Culture.Current`.

Za podršku zastarelih tokova posla, i `options` može da bude tekstualna vrednost. Ovo ima isto ponašanje kao da je `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertuj `"2010-12-31T01:30:00-08:00"` u vrednost `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Konvertuj pomoću prilagođenog formata i nemačke kulture.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Konvertuj pomoću ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
