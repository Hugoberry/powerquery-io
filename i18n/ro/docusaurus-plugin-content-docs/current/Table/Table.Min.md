---
title: Table.Min
---

# Table.Min


## Description

Returnează cel mai mic rând sau cea mai mică valoare implicită utilizând criteriile date.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Returnează cel mai mic rând din <code>table</code>, ţinând cont de <code>comparisonCriteria</code>. Dacă tabelul este necompletat, se returnează valoarea <code>default</code> opţională.


## Examples

### Example #1 
Găsiți rândul cu cea mai mică valoare din coloana [a] din tabel.
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
Găsiți rândul cu cea mai mică valoare din coloana [a] din tabel. Returnați -1 dacă este necompletat.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
