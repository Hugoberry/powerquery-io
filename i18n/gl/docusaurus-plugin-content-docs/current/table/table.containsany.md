---
title: Table.ContainsAny
---

# Table.ContainsAny


Indica se algún dos rexistros especificados aparece como filas na táboa.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se algún dos rexistros especificados na lista de rexistros `rows` aparece como filas en `table`. Pódese especificar un parámetro opcional `equationCriteria` para controlar a comparación entre as filas da táboa.


## Examples

### Example #1
Determinar se a táboa `({[a = 1, b = 2], [a = 3, b = 4]})` contén as filas `[a = 1, b = 2]` ou `[a = 3, b = 5]`.
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
Determinar se a táboa `({[a = 1, b = 2], [a = 3, b = 4]})` contén as filas `[a = 1, b = 3]` ou `[a = 3, b = 5]`.
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
Determinar se a táboa `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` contén as filas `[a = 1, b = 3]` e `[a = 3, b = 5]` comparando só a columna \[a\].
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
