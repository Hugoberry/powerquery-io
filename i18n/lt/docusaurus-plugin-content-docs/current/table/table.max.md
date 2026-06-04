---
title: Table.Max
---

# Table.Max


Pateikiama didžiausia eilutė arba numatytoji reikšmė naudojant nurodytus kriterijus.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Pateikiama didžiausia `table` eilutė pagal nurodytus `comparisonCriteria`. Jei lentelė tuščia, pateikiama pasirenkama `default` reikšmė.


## Examples

### Example #1
Raskite didžiausią reikšmę turinčią stulpelio \[a\] eilutę lentelėje `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Raskite didžiausią reikšmę turinčią stulpelio \[a\] eilutę lentelėje `({})`. Jei tuščia, pateikiama -1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
