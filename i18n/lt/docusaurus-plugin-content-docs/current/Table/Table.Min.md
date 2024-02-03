---
title: Table.Min
---

# Table.Min


## Description

Pateikiama mažiausia eilutė arba numatytoji reikšmė naudojant nurodytus kriterijus.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Pateikiama mažiausia <code>table</code> eilutė pagal nurodytus <code>comparisonCriteria</code>. Jei lentelė tuščia, pateikiama pasirenkama <code>default</code> reikšmė.


## Examples

### Example #1 
Raskite mažiausią reikšmę turinčią stulpelio [a] eilutę lentelėje.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Raskite mažiausią reikšmę turinčią stulpelio [a] eilutę lentelėje. Jei tuščia, pateikiama -1.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
