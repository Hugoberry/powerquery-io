---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Pokazuje da li svi redovi iz tabele zadovoljavaju dati uslov.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Pokazuje da li se svi redovi iz `table` podudaraju sa datim `condition`. Vraća `true` ako se svi redovi podudaraju. U suprotnom vraća `false`.


## Examples

### Example #1
Utvrđivanje da li su sve vrednosti redova iz kolone \[a\] parne u tabeli.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
Pronalaženje da li su sve vrednosti redova \[a = 1, b = 2\], u tabeli `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
