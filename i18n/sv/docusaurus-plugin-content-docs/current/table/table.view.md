---
title: Table.View
---

# Table.View


Skapar eller utvidgar en tabell med användardefinierade hanterare för fråge- och åtgärdsåtgärder.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Returnerar en vy över `table` där de funktioner som specificerats i `handlers` används i stället för en åtgärds standardbeteende när åtgärden tillämpas på vyn.

Om `table` anges, är alla hanteringsfunktioner valfria. Om `table` inte anges krävs funktionerna `GetType` och `GetRows`. Om har angetts för en åtgärd tillämpas åtgärdens standardbeteende på `table` i stället (undantaget när det gäller `GetExpression`).

Hanterarfunktioner måste returnera ett värde som semantiskt motsvarar resultatet av att tillämpa åtgärden på `table` (eller den resulterande vyn när det gäller `GetExpression`).

Om en hanterarfunktion meddelar ett fel tillämpas åtgärdens standardbeteende på vyn.

`Table.View` kan användas för att implementera vikning på en datakälla – översättningen av M-frågor till källspecifika frågor (t.ex. för att skapa T-SQL-instruktioner från M-frågor).

En mer fullständig beskrivning av `Table.View` finns i den publicerade dokumentationen.


## Examples

### Example #1
Skapa en grundläggande vy som inte kräver åtkomst till raderna för att fastställa typ eller radantal.
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
