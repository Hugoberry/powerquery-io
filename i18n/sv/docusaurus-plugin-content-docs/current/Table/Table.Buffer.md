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

Buffrar en tabell i minnet och isolerar den från externa ändringar under utvärdering. buffring är grund. Den tvingar utvärderingen av alla skalärcellsvärden, men lämnar icke-skalära värden (poster, listor, tabeller och så vidare) som de är.    <br />    <br />    Obs! Om du använder den här funktionen kanske dina frågor körs snabbare eller inte. I vissa fall kan det göra att dina frågor körs långsammare på grund av den extra     kostnaden för att läsa alla data och lagra dem i minnet, samt det faktum att buffring förhindrar nedströmsdelegering. Om data inte behöver    buffras men du bara vill förhindra nedströms vikning kan du istället använda <code>Table.StopFolding</code>.


## Examples

### Example #1 
Läs in alla rader i en SQL-tabell i minnet så att underordnade åtgärder inte längre kan köra frågor mot SQL-servern.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
