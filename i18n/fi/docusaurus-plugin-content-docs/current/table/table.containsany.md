---
title: Table.ContainsAny
---

# Table.ContainsAny


Ilmaisee, näkyykö mikään määritetyistä tietueista taulukon riveinä.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Ilmaisee, näkyykö mikään tietueluettelon `rows` määritetyistä tietueista kohteen `table` riveinä. Valinnainen parametri `equationCriteria` voidaan määrittää ohjaamaan taulukon rivien välistä vertailua.


## Examples

### Example #1
Selvitä, sisältääkö taulukko `({[a = 1, b = 2], [a = 3, b = 4]})` rivit `[a = 1, b = 2]` tai `[a = 3, b = 5]`.
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
Selvitä, sisältääkö taulukko `({[a = 1, b = 2], [a = 3, b = 4]})` rivit `[a = 1, b = 3]` tai `[a = 3, b = 5]`.
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
Selvitä, sisältääkö taulukko `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` rivit `[a = 1, b = 3]` tai `[a = 3, b = 5]`, vertaamalla ainoastaan saraketta \[a\].
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
