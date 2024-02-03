---
title: Table.View
---

# Table.View


## Description

Skapar eller utvidgar en tabell med användardefinierade hanterare för fråge- och åtgärdsåtgärder.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Returnerar en vy över <code>table</code> där de funktioner som specificerats i <code>handlers</code> används i stället för en åtgärds standardbeteende när åtgärden tillämpas på vyn.<br />Om <code>table</code> anges, är alla hanteringsfunktioner valfria. Om <code>table</code> inte anges krävs funktionerna <code>GetType</code> och <code>GetRows</code>. Om har angetts för en åtgärd tillämpas åtgärdens standardbeteende på <code>table</code> i stället (undantaget när det gäller <code>GetExpression</code>).<br />Hanterarfunktioner måste returnera ett värde som semantiskt motsvarar resultatet av att tillämpa åtgärden på <code>table</code> (eller den resulterande vyn när det gäller <code>GetExpression</code>).<br />Om en hanterarfunktion meddelar ett fel tillämpas åtgärdens standardbeteende på vyn.<br /><code>Table.View</code> kan användas för att implementera vikning på en datakälla – översättningen av M-frågor till källspecifika frågor (t.ex. för att skapa T-SQL-instruktioner från M-frågor).<br />En mer fullständig beskrivning av <code>Table.View</code> finns i den publicerade dokumentationen.<br />


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
