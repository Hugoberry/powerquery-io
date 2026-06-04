---
title: Table.Max
---

# Table.Max


Vráti najväčšiu hodnotu riadka alebo predvolenú hodnotu pomocou daných kritérií.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Vráti najväčšiu hodnotu riadka v tabuľke `table` s daným kritériom `comparisonCriteria`. Ak je tabuľka prázdna, vráti sa voliteľná hodnota `default`.


## Examples

### Example #1
Nájdite riadok s najväčšou hodnotou v stĺpci \[a\] v tabuľke `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Nájdite riadok s najväčšou hodnotou v stĺpci \[a\] v tabuľke `({})`. Ak je tabuľka prázdna, vráti sa hodnota –1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
