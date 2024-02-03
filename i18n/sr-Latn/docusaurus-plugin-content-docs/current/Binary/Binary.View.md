---
title: Binary.View
---

# Binary.View


## Description

Kreira ili proširuje binarni prikaz sa korisnički definisanim rukovaocima za operacije upita i radnje.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Vraća prikaz <code>binary</code> gde se funkcije navedene u <code>handlers</code> koriste umesto podrazumevanog ponašanja operacije kada se operacija primeni na prikaz.<br />Ako je <code>binary</code> naveden, sve funkcije rukovaoca su opcionalne. Ako <code>binary</code> nije naveden, funkcija rukovaoca <code>GetStream</code> je obavezna. Ako funkcija rukovaoca nije navedena za operaciju, podrazumevano ponašanje operacije se umesto toga primenjuje na <code>binary</code> (osim u slučaju <code>GetExpression</code>).<br />Funkcije rukovaoca moraju da vrate vrednost koja je semantički jednaka rezultatu primene operacije na <code>binary</code> (ili dobijenom prikazu u slučaju <code>GetExpression</code>).<br />Ako funkcija rukovaoca dovede do greške, podrazumevano ponašanje operacije se primenjuje na prikaz.<br /><code>Binary.View</code> može da se koristi za primenu presavijanja na izvor podataka – prevod M upita u operacije karakteristične za izvor (na primer, za preuzimanje odeljka datoteke).<br />Pogledajte objavljenu Power Query dokumentaciju prilagođenog konektora za detaljniji opis funkcije <code>Binary.View</code>.<br />


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
