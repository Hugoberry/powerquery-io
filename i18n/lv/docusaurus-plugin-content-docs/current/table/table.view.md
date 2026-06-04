---
title: Table.View
---

# Table.View


Izveido vai izvērš tabulu ar lietotāja definētiem apdarinātājiem vaicājumu un darbību operācijām.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Atgriež `table` skatu, kur `handlers` norādītās funkcijas tiek izmantotas operācijas noklusējuma darbības vietā, kad operācija tiek lietota skatam.

Ja `table` ir norādīta, visas apdarinātāja funkcijas nav obligātas. Ja `table` nav norādīta, `GetType` un `GetRows` apdarinātāja funkcijas ir obligātas. Ja apdarinātāja funkcija operācijai nav norādīta, tās vietā vienumam `table` tiek lietota operācijas noklusējuma darbība (izņemot `GetExpression` gadījumu).

Apdarinātāja funkcijām jāatgriež vērtība, kas ir semantiski ekvivalenta rezultātam, kas tiek iegūts, lietojot operāciju vienumam `table` ( `GetExpression` gadījumā — rezultāta skatam).

Ja apdarinātāja funkcija izraisa kļūdu, skatam tiek lietota operācijas noklusējuma darbība.

`Table.View` var izmantot, lai ieviestu datu avota locīšanu — Mvaicājumu pārveidošanu avotam atbilstošos vaicājumos (piemēram, lai izveidotu T-SQL priekšrakstus no Mvaicājumiem).

Detalizētu `Table.View` aprakstu skatiet publicētajā dokumentācijā.


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
