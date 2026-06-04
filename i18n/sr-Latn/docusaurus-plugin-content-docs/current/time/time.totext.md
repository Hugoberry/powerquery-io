---
title: Time.ToText
---

# Time.ToText


Vraća tekstualnu reprezentaciju vrednosti vremena.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Daje tekstualni prikaz `time`. Opcionalni `zapis` parametra, `options`, može se obezbediti za navođenje dodatnih svojstava. `culture` se koristi samo za zastarele radne tokove. `record` može da sadrži sledeća polja:

-   `Format`: Vrednost `text` koja označava format koji treba koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje `null` rezultiraće oblikovanjem datuma korišćenjem podrazumevane vrednosti koju definiše `Culture`.
-   `Culture`: Kada `Format` nije bez vrednosti, `Culture` kontroliše neke određivače formata. Na primer, u `"en-US"` `"tt"` je `"AM" ili "PM"`, dok je u `"ar-EG"` `"tt"` je `"ص" ili "م"`. Kada je `Format` `null`, `Culture` kontroliše podrazumevani format koji će se koristiti. Kada je `Culture` `null` ili izostavljen, koristi se `Culture.Current`.

Za podršku zastarelih tokova posla, `options` i `culture` mogu da budu tekstualne vrednosti. Ovo ima isto ponašanje kao da je `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertuj `#time(01, 30, 25)` u `text` vrednost. *Izlaz rezultata može da se razlikuje u zavisnosti od trenutne kulture.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Konvertuj pomoću prilagođenog formata i nemačke kulture.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Konvertuj pomoću standardnog formata vremena.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
