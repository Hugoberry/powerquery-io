---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

Partycjonuje tabelę <code>table</code> na listę składającą się z <code>groups</code> tabel na podstawie wartości kolumny <code>column</code> oraz funkcji <code>hash</code>.    Funkcja <code>hash</code> jest stosowana do wartości wiersza <code>column</code> w celu uzyskania wartości skrótu dla wiersza. W wyniku wykonania na wartości skrótu operacji modulo z użyciem wartości <code>groups</code> funkcja ustala, w której ze zwracanych tabel ma znajdować się dany wiersz.    <ul>       <li><code>table</code>: Tabela, która zostanie podzielona na partycje.</li>       <li><code>column</code>: Kolumna, na podstawie której zostanie wygenerowana wartość skrótu umożliwiająca ustalenie, w której ze zwracanych tabel ma znajdować się dany wiersz.</li>       <li><code>groups</code>: Liczba tabel, na które zostanie podzielona tabela wejściowa.</li>       <li><code>hash</code>: Funkcja stosowana w celu uzyskania wartości skrótu.</li>    </ul>  


## Examples

### Example #1 
Partycjonuje tabelę &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; na dwie tabele według kolumny [a], używając wartości kolumn jako funkcji wyznaczania wartości skrótu.
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
