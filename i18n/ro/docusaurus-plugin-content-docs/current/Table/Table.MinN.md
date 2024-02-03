---
title: Table.MinN
---

# Table.MinN


## Description

Returnează cele mai mici rânduri utilizând criteriile date.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Returnează cele mai mici rânduri din <code>table</code>, ținând cont de <code>comparisonCriteria</code>. După sortarea rândurilor, parametrul <code>countOrCondition</code> poate fi specificat pentru a filtra ulterior rezultatul. Rețineți că algoritmul de sortare nu poate garanta un rezultat sortat fix. Parametrul <code>countOrCondition</code> poate lua mai multe forme:    <ul>        <li> Dacă se specifică un număr, este returnată o listă de maximum <code>countOrCondition</code> elemente în ordine crescătoare. </li>        <li> Dacă se specifică o condiție, este returnată o listă de elemente care, inițial, îndeplinesc condiția. Odată ce elementul nu îndeplinește condiția, nu mai sunt luate în considerare elementele ulterioare. </li>  </ul>


## Examples

### Example #1 
Găsiți rândul cu cea mai mică valoare din coloana [a] cu condiția [a] &lt; 3, în tabel. Rândurile sunt sortate înainte de aplicarea filtrului.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Găsiți rândul cu cea mai mică valoare din coloana [a] cu condiția [b] &lt; 3, în tabel. Rândurile sunt sortate înainte de aplicarea filtrului.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
