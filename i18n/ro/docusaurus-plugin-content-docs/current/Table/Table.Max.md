---
title: Table.Max
---

# Table.Max


## Description

Returnează cel mai mare rând sau cea mai mare valoare implicită utilizând criteriile date.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Returnează cel mai mare rând din <code>table</code>, ţinând cont de <code>comparisonCriteria</code>. Dacă tabelul este necompletat, se returnează valoarea <code>default</code> opţională. 


## Examples

### Example #1 
Găsiţi rândul cu cea mai mare valoare din coloana [a] din tabelul &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Găsiţi rândul cu cea mai mare valoare din coloana [a] din tabelul &lt;code&gt;(\{})&lt;/code&gt;. Returnaţi -1 dacă este necompletat.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
