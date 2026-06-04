---
title: Table.Distinct
---

# Table.Distinct


Odstrani podvojene vrstice iz tabele.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Odstrani podvojene vrstice iz tabele. Izbirni parameter, `equationCriteria`, ki določa, kateri stolpci tabele so bili preverjeni za dvojnike. Če parameter `equationCriteria` ni določen, so preskušeni vsi stolpci.  
  
Ker Power Query včasih preloži nekatere postopke v zaledne vire podatkov (imenovano"pregibanje") in včasih optimizira tudi poizvedbe tako, da preskoči postopke, ki niso nujno potrebni, zato na splošno ni nobenega zagotovila, kateri določeni dvojniki bodo ohranjeni. Ne morete na primer predvidevati, da bo prva vrstica z enoličnim naborom vrednosti stolpcev ostala, vrstice navzdol v tabeli pa bodo odstranjene. Če želite omogočiti predvidljivo delovanje odstranjevanja dvojnikov, najprej shraniti v medpomnilnik tabelo z ukazom `Table.Buffer`.


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
Odstranite podvojene vrstice iz stolpca \[b\] v tabeli `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
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
