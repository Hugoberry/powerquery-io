---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Zamienia pierwszy wiersz wartości w nowe nagłówki kolumn (nazwy kolumn).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Zamienia pierwszy wiersz wartości w nowe nagłówki kolumn (nazwy kolumn). Domyślnie tylko tekst lub liczby są zamieniane w nagłówki. Prawidłowe opcje:    <div>      <code>PromoteAllScalars</code>: Ustawienie <code>true</code> powoduje, że wszystkie wartości skalarne w pierwszym wierszu są zamieniane w nagłówki zgodnie z parametrem <code>Culture</code>, jeśli jest określony (lub zgodnie z ustawieniami regionalnymi bieżącego dokumentu).    W przypadku wartości, których nie można przekonwertować na tekst, zostanie użyta domyślna nazwa kolumny.    </div>    <div>    <code>Culture</code>: Nazwa określająca kulturę danych.    </div>  


## Examples

### Example #1 
Podnieś poziom pierwszego wiersza wartości w tabeli.
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
Podnieś poziom wszystkich wartości skalarnych w pierwszym wierszu tabeli do nagłówków.
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
