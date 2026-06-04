---
title: Table.Distinct
---

# Table.Distinct


Odstráni duplicitné riadky z tabuľky.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Odstráni z tabuľky duplicitné riadky. Nepovinný parameter, `equationCriteria`, určuje, ktoré stĺpce tabuľky sú testované na duplikáty. Ak `equationCriteria` neurčíte, testujú sa všetky stĺpce.  
  
Keďže Power Query niekedy presúva určité operácie do backendových zdrojov údajov (tzv. „folding“) a niekedy tiež optimalizuje dotazy tým, že preskakovaním operácií, ktoré nie sú vyslovene nutné, všeobecne neexistuje žiadna záruka, ktorý konkrétny duplikát sa zachová. Nemôžete napríklad predpokladať, že prvý riadok s jedinečnou množinou hodnôt stĺpca zostane a riadky v tabuľke nižšie budú odstránené. Ak chcete, aby sa odstraňovanie duplikátov správalo predvídateľne, najprv tabuľku uložte do medzipamäte pomocou príkazu `Table.Buffer`.


## Examples

### Example #1
Odstráňte z tabuľky duplicitné riadky.
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
Odstráňte duplicitné riadky zo stĺpca \[b\] v tabuľke `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
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
