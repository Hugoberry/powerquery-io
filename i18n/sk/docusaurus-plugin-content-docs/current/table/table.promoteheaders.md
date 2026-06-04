---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Zvýši úroveň prvého riadka hodnôt ako nové hlavičky stĺpcov (t. j. názvy stĺpcov).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Zvýši úroveň prvého riadka hodnôt ako nové hlavičky stĺpcov (t. j. názvy stĺpcov). V predvolenom nastavení sa na hlavičky zvýši iba úroveň textu alebo číselných hodnôt. Platné možnosti:

-   `PromoteAllScalars`: Ak je nastavené na `true`, všetky skalárne hodnoty v prvom riadku sa zvýšia na hlavičky pomocou hodnoty `Culture`, ak je zadaná (alebo aktuálneho miestneho nastavenia dokumentu). Pre hodnoty, ktoré nie je možné skonvertovať na text, sa použije predvolený názov stĺpca.
-   `Culture`: Názov jazykovej verzie určujúci kultúru údajov.


## Examples

### Example #1
Zvýšte úroveň prvého riadka hodnôt v tabuľke.
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
Zvýši úroveň všetkých skalárnych hodnôt v prvom riadku tabuľky na hlavičky.
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
