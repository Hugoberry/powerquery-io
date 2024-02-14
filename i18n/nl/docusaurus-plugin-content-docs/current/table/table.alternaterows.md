---
title: Table.AlternateRows
---

# Table.AlternateRows


Houdt de aanvankelijke verschuiving aan en wisselt vervolgens tussen het accepteren en overslaan van de volgende rijen:


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Houdt de aanvankelijke verschuiving aan en wisselt vervolgens tussen het accepteren en overslaan van de volgende rijen:    <ul>       <li><code>table</code>: de invoertabel.</li>       <li><code>offset</code>: het aantal rijen dat moet worden aangehouden voordat er met de herhalingen wordt begonnen.</li>       <li><code>skip</code>: het aantal rijen dat bij elke herhaling moet worden verwijderd.</li>       <li><code>take</code>: het aantal rijen dat bij elke herhaling moet worden bewaard.</li>    </ul>    


## Examples

### Example #1 
Een tabel van de tabel retourneren die vanaf de eerste rij één waarde overslaat en vervolgens één waarde aanhoudt.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
