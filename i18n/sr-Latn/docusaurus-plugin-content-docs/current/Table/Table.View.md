---
title: Table.View
---

# Table.View


## Description

Kreira ili proširuje tabelu sa korisnički definisanim rukovaocima za operatore upita i radnje.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Vraća prikaz <code>table</code> gde se funkcije navedene u <code>handlers</code> koriste kao podrazumevano ponašanje operacije kada se operacija primeni na prikaz.<br />Ako <code>table</code> nije obezbeđen, sve funkcije rukovaoca su opcionalne. Ako <code>table</code> nije obezbeđen, funkcije rukovaoca <code>GetType</code> i <code>GetRows</code> su obavezne. Ako funkcija rukovaoca nije navedena za operaciju, podrazumevano ponašanje operacije se umesto toga primenjuje na <code>table</code> (osim u slučaju <code>GetExpression</code>).<br />Funkcije rukovaoca moraju da vrate vrednost koja je semantički jednaka rezultatu primene operacije na <code>table</code> (ili dobijenom prikazu u slučaju <code>GetExpression</code>).<br />Ako funkcija rukovaoca dovede do greške, podrazumevano ponašanje operacije se primenjuje na prikaz.<br /><code>Table.View</code> može da se koristi za primenu presavijanja na izvor podataka – prevod M upita u upite karakteristične za izvor (na primer, kreiranje T-SQL izraza od M upita).<br />Pogledajte Power Query prilagođenu dokumentaciju konektora za detaljniji opis <code>Table.View</code>.<br />


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
