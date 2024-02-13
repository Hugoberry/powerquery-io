---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Verplaatst de eerste rij met waarden omhoog zodat die de nieuwe kolomkoppen (d.w.z. kolomnamen) worden.


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Verplaatst de eerste rij met waarden omhoog zodat die de nieuwe kolomkoppen (d.w.z. kolomnamen) worden. Standaard worden alleen tekst- of getalswaarden omhoog verplaatst naar kolomkoppen. Geldige opties:    <div>      <code>PromoteAllScalars</code>: als deze optie is ingesteld op <code>true</code>, worden alle scalaire waarden in de eerste rij omhoog verplaatst naar kolomkoppen op basis van <code>Culture</code>, indien opgegeven (of de huidige landinstelling van het document).    Voor waarden die niet naar tekst kunnen worden geconverteerd, wordt een standaardkolomnaam gebruikt.    </div>    <div>    <code>Culture</code>: een cultuurnaam die de cultuur voor de gegevens aangeeft.    </div>  


## Examples

### Example #1 
De eerste rij met waarden in de tabel omhoog verplaatsen.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Alle scalaire waarden in de eerste rij van de tabel omhoog verplaatsen naar kolomkoppen.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
