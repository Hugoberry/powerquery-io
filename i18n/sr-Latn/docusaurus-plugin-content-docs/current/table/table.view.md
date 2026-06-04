---
title: Table.View
---

# Table.View


Kreira ili proširuje tabelu sa korisnički definisanim rukovaocima za operatore upita i radnje.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Vraća prikaz `table` gde se funkcije navedene u `handlers` koriste kao podrazumevano ponašanje operacije kada se operacija primeni na prikaz.

Ako `table` nije obezbeđen, sve funkcije rukovaoca su opcionalne. Ako `table` nije obezbeđen, funkcije rukovaoca `GetType` i `GetRows` su obavezne. Ako funkcija rukovaoca nije navedena za operaciju, podrazumevano ponašanje operacije se umesto toga primenjuje na `table` (osim u slučaju `GetExpression`).

Funkcije rukovaoca moraju da vrate vrednost koja je semantički jednaka rezultatu primene operacije na `table` (ili dobijenom prikazu u slučaju `GetExpression`).

Ako funkcija rukovaoca dovede do greške, podrazumevano ponašanje operacije se primenjuje na prikaz.

`Table.View` može da se koristi za primenu presavijanja na izvor podataka – prevod M upita u upite karakteristične za izvor (na primer, kreiranje T-SQL izraza od M upita).

Pogledajte Power Query prilagođenu dokumentaciju konektora za detaljniji opis `Table.View`.


## Examples

### Example #1
Kreirajte osnovni prikaz koji ne zahteva pristup redovima da biste odredili tip ili broj redova.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
