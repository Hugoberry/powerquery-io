---
title: Table.Buffer
---

# Table.Buffer


## Description

Buforuje tabelę w pamięci, izolując ją od zmian zewnętrznych w trakcie obliczeń.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Buforuje tabelę w pamięci, izolując ją od zmian zewnętrznych podczas oceny.    Buforowanie jest płytkie. Wymusza ocenę dowolnych wartości komórek skalarnych, ale pozostawia wartości nieskalarne (rekordy, listy, tabele itd.) w postaci jakiej są.    <br />    <br />    Pamiętaj, że użycie tej funkcji może, ale nie musi, przyspieszyć działanie zapytań. W niektórych przypadkach może to spowodować, że zapytania będą działać wolniej z powodu dodanego     kosztu odczytu wszystkich danych i przechowywania ich w pamięci, a także z faktu, że buforowanie uniemożliwia składanie podrzędne. Jeśli dane nie wymagają    buforowania, a jedynie chcesz uniemożliwić składanie podrzędne, zamiast tego użyj <code>Table.StopFolding</code>.


## Examples

### Example #1 
Załaduj wszystkie wiersze tabeli SQL do pamięci, aby żadne operacje podrzędne nie mogły już wysyłać zapytań do serwera SQL.
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
