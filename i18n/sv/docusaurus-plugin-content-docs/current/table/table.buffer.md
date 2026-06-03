---
title: Table.Buffer
---

# Table.Buffer


Buffrar en tabell i minnet och isolerar den från externa ändringar under utvärdering.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Buffrar en tabell i minnet och isolerar den från externa ändringar under utvärdering. Buffringen är ytlig. Den tvingar fram utvärdering av alla skalära cellvärden, men lämnar icke-skalära värden (poster, listor, tabeller och så vidare) oförändrade.

-   `table`: Tabellen som ska buffras i minnet.
-   `options`: (Valfritt) Följande alternativ för postvärden kan användas:
    -   `BufferMode`: Buffertläget som beskriver vilken typ av buffring som ska utföras. Det här alternativet kan vara antingen `BufferMode.Eager` eller `BufferMode.Delayed`.

Om du använder den här funktionen kanske dina frågor körs snabbare eller inte. I vissa fall kan det göra att dina frågor körs långsammare på grund av den tillagda kostnaden för att läsa alla data och lagra dem i minnet, samt det faktum att buffring förhindrar nedströmsdelegering. Om data inte behöver buffrad men du vill bara förhindra nedströmsdelegering använder du `Table.StopFolding` i stället.


## Examples

### Example #1
Läs in alla rader i en SQL-tabell i minnet så att underordnade åtgärder inte längre kan köra frågor mot SQL-servern.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
