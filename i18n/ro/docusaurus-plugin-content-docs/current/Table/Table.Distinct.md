---
title: Table.Distinct
---

# Table.Distinct


## Description

Elimină rândurile duplicat din tabel.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Elimină rândurile dublate din tabel.    Un parametru opțional, <code>equationCriteria</code>, specifică ce coloane din tabel sunt testate pentru dublare. Dacă nu se specifică <code>equationCriteria</code>, sunt testate toate coloanele. <br />    <br />    Deoarece Power Query descarcă uneori anumite operațiuni pentru sursele de date backend (cunoscută ca „pliere”) și optimizează uneori interogările     omițând operațiunile care nu sunt strict necesare, în general nu există nicio garanție care dublură anume va fi păstrată.    De exemplu, nu puteți presupune că primul rând cu un set unic de valori de coloană va rămâne, iar rândurile aflate mai jos în tabel vor fi eliminate.    Dacă doriți ca eliminarea dublurii să se comporte previzibil, mai întâi utilizați tabelul ca zonă tampon, utilizând <code>Table.Buffer</code>.


## Examples

### Example #1 
Eliminați rândurile duplicat din tabel.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
Eliminaţi rândurile duplicat din coloana [b] din tabelul &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
