---
title: Binary.View
---

# Binary.View


Kreira ili proširuje binarni prikaz sa korisnički definisanim rukovaocima za operacije upita i radnje.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Vraća prikaz `binary` gde se funkcije navedene u `handlers` koriste umesto podrazumevanog ponašanja operacije kada se operacija primeni na prikaz.

Ako je `binary` naveden, sve funkcije rukovaoca su opcionalne. Ako `binary` nije naveden, funkcija rukovaoca `GetStream` je obavezna. Ako funkcija rukovaoca nije navedena za operaciju, podrazumevano ponašanje operacije se umesto toga primenjuje na `binary` (osim u slučaju `GetExpression`).

Funkcije rukovaoca moraju da vrate vrednost koja je semantički jednaka rezultatu primene operacije na `binary` (ili dobijenom prikazu u slučaju `GetExpression`).

Ako funkcija rukovaoca dovede do greške, podrazumevano ponašanje operacije se primenjuje na prikaz.

`Binary.View` može da se koristi za primenu presavijanja na izvor podataka – prevod M upita u operacije karakteristične za izvor (na primer, za preuzimanje odeljka datoteke).

Pogledajte objavljenu Power Query dokumentaciju prilagođenog konektora za detaljniji opis funkcije `Binary.View`.


## Examples

### Example #1
Kreirajte osnovni prikaz koji ne zahteva pristup podacima da biste odredili dužinu.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
