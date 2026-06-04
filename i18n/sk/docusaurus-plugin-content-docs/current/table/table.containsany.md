---
title: Table.ContainsAny
---

# Table.ContainsAny


Udáva, či sa niektoré zo zadaných záznamov zobrazujú ako riadky v tabuľke.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Udáva, či sa niektoré zadané záznamy v zozname záznamov `rows` zobrazujú ako riadky v tabuľke `table`. Možno stanoviť voliteľný parameter `equationCriteria` a kontrolovať tak porovnanie medzi riadkami tabuľky.


## Examples

### Example #1
Určte, či tabuľka `({[a = 1, b = 2], [a = 3, b = 4]})` obsahuje riadky `[a = 1, b = 2]` alebo `[a = 3, b = 5]`.
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
Určte, či tabuľka `({[a = 1, b = 2], [a = 3, b = 4]})` obsahuje riadky `[a = 1, b = 3]` alebo `[a = 3, b = 5]`.
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
Určte, či tabuľka `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` obsahuje riadky `[a = 1, b = 3]` alebo `[a = 3, b = 5]`, pričom porovnáva iba stĺpec \[a\].
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
