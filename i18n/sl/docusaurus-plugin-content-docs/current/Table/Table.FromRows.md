---
title: Table.FromRows
---

# Table.FromRows


## Description

Ustvari tabelo iz seznama vrednosti vrstic in izbirnih stolpcev


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Ustvari tabelo iz seznama <code>rows</code>, kjer je vsak element seznama notranji seznam, ki vsebuje vrednosti stolpcev za posamezno vrstico. Za <code>columns</code> lahko navedete izbirni seznam imen stolpcev, vrsto tabele ali število stolpcev.


## Examples

### Example #1 
Vrne tabelo s stolpcem [IDStranke] z vrednostma \{1, 2} in stolpcem [Ime] z vrednostma \{&#34;Bob&#34;, &#34;Jim&#34;} in stolpcem [Telefon] z vrednostma \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Vrne tabelo s stolpcem [IDStranke] z vrednostma \{1, 2}, stolpcem [Ime] z vrednostma \{&#34;Bob&#34;, &#34;Jim&#34;}, in stolpcem [Telefon] z vrednostma \{&#34;123-4567&#34;, &#34;987-6543&#34;}, pri čemer je [IDStranke] število, [Ime] in [telefon] pa besedilo.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
