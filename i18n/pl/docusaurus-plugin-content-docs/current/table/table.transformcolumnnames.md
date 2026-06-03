---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformuje nazwy kolumn za pomocą podanej funkcji.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Przekształca nazwy kolumn przy użyciu podanej funkcji `nameGenerator`. Prawidłowe opcje:

`MaxLength` Określa maksymalną długość nowych nazw kolumn. Jeśli podana funckja zwróci dłuższą nazwe kolumny, to zostanie ona przycięta.

`Comparer` to funkcja porównująca, używana do sterowania porównywaniem podczas generowania nowych nazw kolumn. Funkcje porównujące mogą być używane do przeprowadzania porównania nie wymagającego rozróżniania wielkości liter, uwzględniającego uwarunkowania kulturowe lub lokalne.

W języku formuły są dostępne następujące wbudowane funkcje porównujące:

-   `Comparer.Ordinal`: służy do wykonywania dokładnego porównania porządkowego
-   `Comparer.OrdinalIgnoreCase`: służy do wykonywania dokładnego porównania bez uwzględniania wielkości liter
-   `Comparer.FromCulture`: służy do porównywania uwzględniającego uwarunkowania kulturowe


## Examples

### Example #1
Usuń znak `#(tab)` z nazw kolumn
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Transformuj nazwy kolumn w celu wygenerowania 6-znakowych nazw bez rozróżniania wielkości liter.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
