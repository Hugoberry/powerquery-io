---
title: Table.Distinct
---

# Table.Distinct


Uklanja duplirane redove iz tabele.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Uklanja duple redove iz tabele. Opcionalni parametar, `equationCriteria`, određuje koje kolone tabele se testiraju na dupliranje. Ako `equationCriteria` nije navedeno, testiraju se sve kolone.  
  
Pošto Power Query ponekad prebacuje određene operacije u pozadinske izvore podataka (poznate kao „presavijanje“), a ponekad optimizuje upite od strane preskakanjem operacija koje nisu striktno neophodne tako što preskače operacije koje nisu strogo neophodne, uopšteno ne postoji garancija koji će se određeni duplikat sačuvati. Na primer, ne možete pretpostaviti da će prvi red sa jedinstvenim skupom vrednosti kolona ostati i da će redovi u tabeli biti uklonjeni. Ako želite da se uklanjanje duplikata ponaša predvidljivo, prvo baferujte tabelu pomoću `Table.Buffer`.


## Examples

### Example #1
Uklanjanje dupliranih redova iz tabele.
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
Uklanjanje dupliranih redova iz kolone \[b\] u tabeli `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
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
