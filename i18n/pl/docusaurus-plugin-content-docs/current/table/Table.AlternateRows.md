---
title: Table.AlternateRows
---

# Table.AlternateRows


Zachowuje początkowe przesunięcie, a następnie naprzemiennie pobiera i pomija kolejne wiersze.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Zachowuje początkowe przesunięcie, a następnie naprzemiennie pobiera i pomija kolejne wiersze.    <ul>       <li><code>table</code>: Tabela wejściowa.</li>       <li><code>offset</code>: Liczba wierszy do zachowania przed rozpoczęciem iteracji.</li>       <li><code>skip</code>: Liczba wierszy do usunięcia w każdej iteracji.</li>       <li><code>take</code>: Liczba wierszy do zachowania w każdej iteracji.</li>    </ul>    


## Examples

### Example #1 
Utwórz tabelę na podstawie tabeli, rozpoczynając od pierwszego wiersza, pomijając jedną wartość, a następnie zachowując jedną wartość.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
