---
title: Table.Distinct
---

# Table.Distinct


Odebere z tabulky duplicitní řádky.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Odebere z tabulky duplicitní řádky. Volitelný parametr `equationCriteria` určuje, které sloupce tabulky jsou testovány na duplikaci. Pokud `equationCriteria` neurčíte, testují se všechny sloupce.  
  
Protože Power Query někdy přesměrovává určité operace do back-endových zdrojů dat (označované jako „skládání“) a také někdy optimalizuje dotazy přeskakováním operací, které nejsou nezbytně nutné, obecně neexistuje žádná záruka, který konkrétní duplikát se zachová. Nemůžete například předpokládat, že první řádek s jedinečnou sadou hodnot sloupců zůstane a řádky v tabulce budou dále dole odebrány. Pokud chcete, aby se duplicitní odebrání chovalo předvídatelně, nejprve tabulku uložte do vyrovnávací paměti pomocí `Table.Buffer`.


## Examples

### Example #1
Odebere z tabulky všechny duplicitní řádky.
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
Odebere duplicitní řádky ze sloupce \[b\] v tabulce `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
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
