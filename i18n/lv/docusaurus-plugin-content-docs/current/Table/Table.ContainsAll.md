---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Tiek norādīts, vai tabulā ir ietvertas visiem norādītajiem ierakstiem atbilstošas rindas.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Tiek norādīts, vai tabulā <code>table</code> ir ietvertas visiem sarakstā <code>rows</code> norādītajiem ierakstiem atbilstošas rindas.    Varat norādīt papildu parametru <code>equationCriteria</code>, lai kontrolētu tabulas rindu salīdzinājumu.


## Examples

### Example #1 
Nosakiet, vai tabulā ir ietvertas visas rindas, salīdzinot tikai kolonnu [CustomerID].
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Nosakiet, vai tabulā ir ietvertas visas rindas.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
