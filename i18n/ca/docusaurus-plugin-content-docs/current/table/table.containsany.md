---
title: Table.ContainsAny
---

# Table.ContainsAny


Indica si algun dels registres especificats apareix com a files a la taula.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica si algun dels registres especificats a la llista de registres `rows` apareix com a files a la `table`. Es pot especificar un paràmetre opcional `equationCriteria` per controlar la comparació entre les files de la taula.


## Examples

### Example #1
Determina si la taula `({[a = 1, b = 2], [a = 3, b = 4]})` conté les files `[a = 1, b = 2]` i `[a = 3, b = 5]`.
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
Determina si la taula `({[a = 1, b = 2], [a = 3, b = 4]})` conté les files `[a = 1, b = 3]` i `[a = 3, b = 5]`.
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
Determina si la taula `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` conté les files `[a = 1, b = 3]` o `[a = 3, b = 5]` en comparar només la columna \[a\].
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
