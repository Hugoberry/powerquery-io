---
title: Table.Partition
---

# Table.Partition


Partycjonuje tabelę na listę tabel na podstawie określonej liczby grup i kolumn.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Partycjonuje tabelę `table` na listę składającą się z `groups` tabel na podstawie wartości kolumny `column` oraz funkcji `hash`. Funkcja `hash` jest stosowana do wartości wiersza `column` w celu uzyskania wartości skrótu dla wiersza. W wyniku wykonania na wartości skrótu operacji modulo z użyciem wartości `groups` funkcja ustala, w której ze zwracanych tabel ma znajdować się dany wiersz.

-   `table`: Tabela, która zostanie podzielona na partycje.
-   `column`: Kolumna, na podstawie której zostanie wygenerowana wartość skrótu umożliwiająca ustalenie, w której ze zwracanych tabel ma znajdować się dany wiersz.
-   `groups`: Liczba tabel, na które zostanie podzielona tabela wejściowa.
-   `hash`: Funkcja stosowana w celu uzyskania wartości skrótu.


## Examples

### Example #1
Partycjonuje tabelę `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` na dwie tabele według kolumny \[a\], używając wartości kolumn jako funkcji wyznaczania wartości skrótu.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
