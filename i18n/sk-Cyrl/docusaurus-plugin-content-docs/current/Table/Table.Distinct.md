---
title: Table.Distinct
---

# Table.Distinct


## Description

Odstráni duplicitné riadky z tabuľky.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Odstráni z tabuľky duplicitné riadky.    Nepovinný parameter, <code>equationCriteria</code>, určuje, ktoré stĺpce tabuľky sú testované na duplikáty. Ak <code>equationCriteria</code> neurčíte, testujú sa všetky stĺpce.<br />    <br />    Keďže Power Query niekedy presmerováva určité operácie do zdrojových údajov na serveri (označované ako „posúvanie“) a tiež niekedy optimalizuje dotazy     preskakovaním operácií, ktoré nie sú vyslovene nutné, všeobecne neexistuje žiadna záruka, ktorý konkrétny duplikát sa zachová.    Nemôžete napríklad predpokladať, že prvý riadok s jedinečnou množinou hodnôt stĺpca zostane a riadky v tabuľke nižšie budú odstránené.    Ak chcete, aby sa odstraňovanie duplikátov správalo predvídateľne, najprv tabuľku uložte do medzipamäte pomocou príkazu <code>Table.Buffer</code>.


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
Odstráňte duplicitné riadky zo stĺpca [b] v tabuľke &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
