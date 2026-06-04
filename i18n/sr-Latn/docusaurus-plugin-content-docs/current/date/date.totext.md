---
title: Date.ToText
---

# Date.ToText


Vraća tekstualnu reprezentaciju vrednosti datuma.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Daje tekstualni prikaz `date`. Opcionalni `zapis` parametra, `options`, može se obezbediti za navođenje dodatnih svojstava. `culture` se koristi samo za zastarele radne tokove. `record` može da sadrži sledeća polja:

-   `Format`: Vrednost `text` koja označava format koji treba koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje `null` rezultiraće oblikovanjem datuma korišćenjem podrazumevane vrednosti koju definiše `Culture`.
-   `Culture`: Kada `Format` nije bez vrednosti, `Culture` kontroliše neke određivače formata. Na primer, u `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...`, dok je u `"ru-RU"` `"MMM"` `"янв", "фев", "мар", ...`. Kada je `Format` `null`, `Culture` kontroliše podrazumevani format koji će se koristiti. Kada je `Culture` `null` ili izostavljen, koristi se `Culture.Current`.

Za podršku zastarelih tokova posla, `options` i `culture` mogu da budu tekstualne vrednosti. Ovo ima isto ponašanje kao da je `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertuj `#date(2010, 12, 31)` u `text` vrednost. *Izlaz rezultata može da se razlikuje u zavisnosti od trenutne kulture.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Konvertuj pomoću prilagođenog formata i nemačke kulture.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Pronađi godinu u Hidžra kalendaru koja odgovara 1. januaru 2000. godine u gregorijanskom kalendaru.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
