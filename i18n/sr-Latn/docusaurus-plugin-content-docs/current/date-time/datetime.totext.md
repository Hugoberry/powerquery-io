---
title: DateTime.ToText
---

# DateTime.ToText


Vraća tekstualnu reprezentaciju vrednosti datuma i vremena.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Daje tekstualni prikaz `dateTime`. Opcionalni `zapis` parametra, `options`, može se obezbediti za navođenje dodatnih svojstava. `culture` se koristi samo za zastarele radne tokove. `record` može da sadrži sledeća polja:

-   `Format`: Vrednost `text` koja označava format koji treba koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje `null` rezultiraće oblikovanjem datuma korišćenjem podrazumevane vrednosti koju definiše `Culture`.
-   `Culture`: Kada `Format` nije bez vrednosti, `Culture` kontroliše neke određivače formata. Na primer, u `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...`, dok je u `"ru-RU"` `"MMM"` `"янв", "фев", "мар", ...`. Kada je `Format` `null`, `Culture` kontroliše podrazumevani format koji će se koristiti. Kada je `Culture` `null` ili izostavljen, koristi se `Culture.Current`.

Za podršku zastarelih tokova posla, `options` i `culture` mogu da budu tekstualne vrednosti. Ovo ima isto ponašanje kao da je `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertuj `#datetime(2010, 12, 31, 01, 30, 25)` u `text` vrednost. *Izlaz rezultata može da se razlikuje u zavisnosti od trenutne kulture.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Konvertuj pomoću prilagođenog formata i nemačke kulture.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Konvertuj pomoću ISO 8601 obrasca.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
