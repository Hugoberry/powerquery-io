---
title: Table.ContainsAny
---

# Table.ContainsAny


Pokazuje da li se bilo koji navedeni zapis pojavljuje kao red u tabeli.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Pokazuje da li se bilo koji navedeni zapis sa liste zapisa `rows` pojavljuje kao red u `table`. Može se navesti opcionalni parametar `equationCriteria` radi kontrole poređenja redova iz tabele.


## Examples

### Example #1
Utvrđivanje da li tabela `({[a = 1, b = 2], [a = 3, b = 4]})` sadrži redove `[a = 1, b = 2]` ili `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Utvrđivanje da li tabela `({[a = 1, b = 2], [a = 3, b = 4]})` sadrži redove `[a = 1, b = 3]` ili `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Utvrđivanje da li tabela `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` sadrži redove `[a = 1, b = 3]` ili `[a = 3, b = 5]` poređenjem samo kolone \[a\].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
