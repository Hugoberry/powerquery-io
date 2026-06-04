---
title: Table.FromRows
---

# Table.FromRows


Ustvari tabelo iz seznama vrednosti vrstic in izbirnih stolpcev.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Ustvari tabelo iz seznama `rows`, kjer je vsak element seznama notranji seznam, ki vsebuje vrednosti stolpcev za posamezno vrstico. Za `columns` lahko navedete izbirni seznam imen stolpcev, vrsto tabele ali število stolpcev.


## Examples

### Example #1
Vrne tabelo s stolpcem \[IDStranke\] z vrednostma \{1, 2\} in stolpcem \[Ime\] z vrednostma \{"Bob", "Jim"\} in stolpcem \[Telefon\] z vrednostma \{"123-4567", "987-6543"\}.
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
Vrne tabelo s stolpcem \[IDStranke\] z vrednostma \{1, 2\}, stolpcem \[Ime\] z vrednostma \{"Bob", "Jim"\}, in stolpcem \[Telefon\] z vrednostma \{"123-4567", "987-6543"\}, pri čemer je \[IDStranke\] število, \[Ime\] in \[telefon\] pa besedilo.
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
