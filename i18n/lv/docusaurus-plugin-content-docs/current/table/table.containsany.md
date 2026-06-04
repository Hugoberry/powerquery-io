---
title: Table.ContainsAny
---

# Table.ContainsAny


Tiek norādīts, vai tabulā ir ietverta kādam no norādītajiem ierakstiem atbilstoša rinda.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Tiek norādīts, vai tabulā `table` ir ietverta kādam no sarakstā `rows` norādītajiem ierakstiem atbilstoša rinda. Varat norādīt papildu parametru `equationCriteria`, lai kontrolētu tabulas rindu salīdzinājumu.


## Examples

### Example #1
Nosakiet, vai tabulā `({[a = 1, b = 2], [a = 3, b = 4]})` ir ietverta rinda `[a = 1, b = 2]` vai `[a = 3, b = 5]`.
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
Nosakiet, vai tabulā `({[a = 1, b = 2], [a = 3, b = 4]})` ir ietverta rinda `[a = 1, b = 3]` vai `[a = 3, b = 5]`.
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
Nosakiet, vai tabulā `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` ir ietverta rinda `[a = 1, b = 3]` vai `[a = 3, b = 5]`, salīdzinot tikai kolonnu \[a\].
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
