---
title: Table.Distinct
---

# Table.Distinct


Usuwa zduplikowane wiersze z tabeli.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Usuwa zduplikowane wiersze z tabeli. Opcjonalny parametr, `equationCriteria`, określa, które kolumny tabeli są testowane pod kątem duplikacji. Jeśli nie określono `equationCriteria`, wszystkie kolumny są testowane.  
  
Ponieważ dodatek Power Query czasami przenosi niektóre operacje do źródeł danych wewnętrznej bazy danych (nazywanych „składaniem”), a także czasami optymalizuje zapytania poprzez pomijanie operacji, które nie są ściśle konieczne, ogólnie rzecz biorąc, nie ma gwarancji, który konkretny duplikat zostanie zachowany. Na przykład nie można założyć, że pierwszy wiersz z unikatowym zestawem wartości kolumn pozostanie, a wiersze znajdujące się poniżej w tabeli zostaną usunięte. Jeśli chcesz, aby usunięcie duplikatów działało w sposób przewidywalny, najpierw zbuforuj tabelę przy użyciu funkcji `Table.Buffer`.


## Examples

### Example #1
Usuń zduplikowane wiersze z tabeli.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
Usuń zduplikowane wiersze z kolumny \[b\] w tabeli `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
