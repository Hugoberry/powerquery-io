---
title: Table.Distinct
---

# Table.Distinct


Verwijdert dubbele rijen uit de tabel.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Hiermee verwijdert u dubbele rijen uit de tabel. Een optionele parameter, `equationCriteria`, geeft aan welke kolommen van de tabel worden getest op duplicatie. Als `equationCriteria` niet is opgegeven, worden alle kolommen getest.  
  
Omdat Power Query soms bepaalde bewerkingen offloadt naar back-endgegevensbronnen (ook wel 'folding' genoemd), en soms ook query's optimaliseert door bewerkingen over te slaan die niet strikt noodzakelijk zijn, is er over het algemeen geen garantie welk specifiek duplicaat behouden blijft. U kunt er bijvoorbeeld niet van uitgaan dat de eerste rij met een unieke set kolomwaarden behouden blijft en rijen verder omlaag in de tabel worden verwijderd. Als u wilt dat de dubbele verwijdering voorspelbaar werkt, buffert u eerst de tabel met `Table.Buffer`.


## Examples

### Example #1
De dubbele rijen uit de tabel verwijderen.
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
De dubbele rijen uit kolom \[b\] in de tabel `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})` verwijderen.
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
