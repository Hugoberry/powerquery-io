---
title: Table.NestedJoin
---

# Table.NestedJoin


Suorittaa liitoksen taulukoiden välillä annetuille sarakkeille ja tuo liitostuloksen uuteen sarakkeeseen.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Liittää kohteen `table1` rivit ja kohteen `table2` rivit yhteen perustuen kohteen `key1` (kohteelle `table1`) ja `key2` (kohteelle `table2`) valitsemien avainsarakkeiden arvojen samanlaisuuden perusteella. Tulokset lisätään sarakkeeseen nimeltä `newColumnName`.

Valinnainen `joinKind` määrittää suoritettavan liitoksen tyypin. Oletusarvon mukaan vasen ulkoliitos suoritetaan, jos kohdetta `joinKind` ei määritetä.

Valinnainen kohteen `keyEqualityComparers` joukko voidaan sisällyttää määrittämään, miten avainsarakkeita verrataan. Tämä ominaisuus on tällä hetkellä tarkoitettu vain sisäiseen käyttöön.


## Examples

### Example #1
Liitä kaksi taulukkoa käyttämällä yhtä avainsaraketta.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
