---
title: Table.Distinct
---

# Table.Distinct


## Description

Odstrani podvojene vrstice iz tabele.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Odstrani podvojene vrstice iz tabele.    Izbirni parameter <code>equationCriteria</code>, ki določa, za katere stolpce tabele je bilo preverjeno, ali vsebujejo dvojnike. Če parameter <code>equationCriteria</code> ni določen, so preskušeni vsi stolpci.<br />    <br />    Power Query včasih preloži nekatere postopke v zaledne vire podatkov (imenovane "pregibanje") in včasih optimizira tudi poizvedbe tako, da     preskoči postopke, ki niso nujno potrebni, zato na splošno ni nobenega zagotovila, kateri določeni dvojniki bodo ohranjeni.    Ne morete na primer predvidevati, da bo prva vrstica z enoličnim naborom vrednosti stolpcev ostala, vrstice navzdol v tabeli pa bodo odstranjene.    Če želite omogočiti predvidljivo delovanje odstranjevanja dvojnikov, najprej medpomnite tabelo z ukazom <code>Table.Buffer</code>.


## Examples

### Example #1 
Odstranite podvojene vrstice iz tabele.
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
Odstranite podvojene vrstice iz stolpca [b] v tabeli &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
