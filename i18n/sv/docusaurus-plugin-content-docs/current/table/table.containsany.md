---
title: Table.ContainsAny
---

# Table.ContainsAny


Anger om någon av de angivna posterna visas som rader i tabellen.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Anger om någon av de angivna posterna i listan med poster, `rows`, visas som rader i `table`. En valfri parameter, `equationCriteria`, kan anges för att hantera jämförelsen mellan raderna i tabellen.


## Examples

### Example #1
Kontrollera om tabellen `({[a = 1, b = 2], [a = 3, b = 4]})` innehåller raderna `[a = 1, b = 2]` eller `[a = 3, b = 5]`.
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
Kontrollera om tabellen `({[a = 1, b = 2], [a = 3, b = 4]})` innehåller raderna `[a = 1, b = 3]` eller `[a = 3, b = 5]`.
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
Kontrollera om tabellen `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` innehåller raderna `[a = 1, b = 3]` eller `[a = 3, b = 5]` genom att bara jämföra kolumnen \[a\].
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
