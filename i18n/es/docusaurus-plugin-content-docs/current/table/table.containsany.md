---
title: Table.ContainsAny
---

# Table.ContainsAny


Indica si alguno de los registros especificados aparece como filas en la tabla.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica si alguno de los registros especificados en la lista de registros `rows` aparece como filas en `table`. Se puede especificar un parámetro `equationCriteria` opcional para controlar la comparación entre las filas de la tabla.


## Examples

### Example #1
Determinar si la tabla `({[a = 1, b = 2], [a = 3, b = 4]})` contiene las filas `[a = 1, b = 2]` o `[a = 3, b = 5]`.
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
Determinar si la tabla `({[a = 1, b = 2], [a = 3, b = 4]})` contiene las filas `[a = 1, b = 3]` o `[a = 3, b = 5]`.
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
Determinar si la tabla `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` contiene las filas `[a = 1, b = 3]` o `[a = 3, b = 5]` comparando solo la columna \[a\].
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
