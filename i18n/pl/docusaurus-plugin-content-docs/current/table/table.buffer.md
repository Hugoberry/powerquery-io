---
title: Table.Buffer
---

# Table.Buffer


Buforuje tabelę w pamięci, izolując ją od zmian zewnętrznych w trakcie obliczeń.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Buforuje tabelę w pamięci, izolując ją od zewnętrznych zmian podczas oceny. Buforowanie jest płytkie. Wymusza ocenę wszystkich skalarnych wartości komórek, ale pozostawia wartości nieskalarne (rekordy, listy, tabele itd.) bez zmian.

-   `table`: tabela do zbuforowania w pamięci.
-   `options`: (opcjonalnie) można użyć następujących wartości rekordu opcji:
    -   `BufferMode`: tryb buforowania określający sposób buforowania. Ta opcja może mieć wartość `BufferMode.Eager` lub `BufferMode.Delayed`.

Użycie tej funkcji może przyspieszyć lub spowolnić działanie zapytań. W niektórych przypadkach może to spowodować wolniejsze działanie z powodu dodatkowego kosztu odczytu wszystkich danych i przechowywania ich w pamięci, a także dlatego, że buforowanie uniemożliwia składanie podrzędne. Jeśli dane nie muszą być buforowane, a chcesz tylko zapobiec składaniu podrzędnemu, użyj zamiast tego funkcji `Table.StopFolding`.


## Examples

### Example #1
Załaduj wszystkie wiersze tabeli SQL do pamięci, aby żadne operacje podrzędne nie mogły już wysyłać zapytań do serwera SQL.
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
