---
title: Table.View
---

# Table.View


## Description

Izveido vai izvērš tabulu ar lietotāja definētiem apdarinātājiem vaicājumu un darbību operācijām.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Atgriež <code>table</code> skatu, kur <code>handlers</code> norādītās funkcijas tiek izmantotas operācijas noklusējuma darbības vietā, kad operācija tiek lietota skatam.<br />Ja <code>table</code> ir norādīta, visas apdarinātāja funkcijas nav obligātas. Ja <code>table</code> nav norādīta, <code>GetType</code> un <code>GetRows</code> apdarinātāja funkcijas ir obligātas. Ja apdarinātāja funkcija operācijai nav norādīta, tās vietā vienumam <code>table</code> tiek lietota operācijas noklusējuma darbība (izņemot <code> GetExpression</code> gadījumu).<br />Apdarinātāja funkcijām jāatgriež vērtība, kas ir semantiski ekvivalenta rezultātam, kas tiek iegūts, lietojot operāciju vienumam <code>table</code> (<code> GetExpression</code> gadījumā— rezultāta skatam).<br />
Ja apdarinātāja funkcija izraisa kļūdu, skatam tiek lietota operācijas noklusējuma darbība.<br />
<code>Table.View</code> var izmantot, lai ieviestu datu avota locīšanu
— Mvaicājumu pārveidošanu avotam atbilstošos vaicājumos (piemēram, lai izveidotu T-SQL priekšrakstus no Mvaicājumiem).<br />Detalizētu <code>Table.View</code> aprakstu skatiet publicētajā dokumentācijā.<br />


## Examples

### Example #1 
Izveidojiet pamata skatu, kam nav nepieciešama piekļuve rindām, lai noteiktu tipu vai rindu skaitu.
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
