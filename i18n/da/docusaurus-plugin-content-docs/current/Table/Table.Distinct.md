---
title: Table.Distinct
---

# Table.Distinct


## Description

Fjerner dublerede rækker fra tabellen.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Fjerner dublerede rækker fra tabellen.    En valgfri parameter, <code>equationCriteria</code>, angiver, hvilke kolonner i tabellen der testes for duplikering. Hvis <code>equationCriteria</code>    ikke er angivet, testes alle kolonner.<br />    <br />    Da Power Query nogle gange aflaster visse handlinger til backend-datakilder (kaldet "foldning") og optimerer nogle gange også forespørgsler ved     at springe handlinger over, der ikke er strengt nødvendige,  generelt er der ingen garanti for, hvilken specifik dublet der bevares.    Du kan f.eks. ikke antage, at den første række med et entydigt sæt kolonneværdier bevares, og at rækker længere nede i tabellen fjernes.    Hvis du vil have, at fjernelsen af dubletter skal fungere forudsigeligt, skal du først bufferlagre tabellen ved hjælp af <code>Table.Buffer</code>.


## Examples

### Example #1 
Fjern de dublerede rækker fra tabellen.
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
Fjern de dublerede rækker fra kolonnen [b] i tabellen &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
