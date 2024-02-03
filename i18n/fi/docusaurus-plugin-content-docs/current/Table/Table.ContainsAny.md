---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Ilmaisee, näkyykö mikään määritetyistä tietueista taulukon riveinä.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Ilmaisee, näkyykö mikään tietueluettelon <code>rows</code> määritetyistä tietueista kohteen <code>table</code> riveinä.    Valinnainen parametri <code>equationCriteria</code> voidaan määrittää ohjaamaan taulukon rivien välistä vertailua.


## Examples

### Example #1 
Selvitä, sisältääkö taulukko &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; rivit &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; tai &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, sisältääkö taulukko &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; rivit &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; tai &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
Selvitä, sisältääkö taulukko &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; rivit &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; tai &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;, vertaamalla ainoastaan saraketta [a].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
