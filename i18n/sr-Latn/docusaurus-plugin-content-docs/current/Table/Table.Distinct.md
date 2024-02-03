---
title: Table.Distinct
---

# Table.Distinct


## Description

Uklanja duplirane redove iz tabele.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Uklanja duple redove iz tabele.    Opcionalni parametar, <code>equationCriteria</code>, određuje koje kolone tabele se testiraju na dupliranje. Ako <code>equationCriteria</code> nije navedeno, testiraju se sve kolone.<br />    <br />    Pošto Power Query ponekad prebacuje određene operacije u pozadinske izvore podataka (poznate kao „presavijanje“), a ponekad optimizuje upite     preskakanjem operacija koje nisu striktno neophodne tako što preskače operacije koje nisu strogo neophodne, uopšteno ne postoji garancija koji će se određeni duplikat sačuvati.    Na primer, ne možete pretpostaviti da će prvi red sa jedinstvenim skupom vrednosti kolona ostati i da će redovi u tabeli biti uklonjeni.    Ako želite da se uklanjanje duplikata ponaša predvidljivo, prvo baferujte tabelu pomoću <code>Table.Buffer</code>.


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
Uklanjanje dupliranih redova iz kolone [b] u tabeli &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
