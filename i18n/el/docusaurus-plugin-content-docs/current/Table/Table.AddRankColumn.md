---
title: Table.AddRankColumn
---

# Table.AddRankColumn


## Description

Προσαρτά μια στήλη με την κατάταξη μίας ή περισσότερων άλλων στηλών.


## Syntax

```powerquery
Table.AddRankColumn(
    table as table,
    newColumnName as text,
    comparisonCriteria as any,
    optional options as record
) as table
```


## Details

Προσαρτά μια στήλη με όνομα <code>newColumnName</code> στην <code>table</code> με την κατάταξη μίας ή περισσότερων στηλών που περιγράφονται από <code>comparisonCriteria</code>.Η επιλογή RankKind στο <code>options</code> μπορεί να χρησιμοποιηθεί από προχωρημένους χρήστες για την επιλογή μιας πιο συγκεκριμένης μεθόδου κατάταξης.


## Examples

### Example #1 
Προσθέστε μια στήλη με το όνομα &#34;RevenueRank&#34; στον πίνακα που κατατάσσει τη στήλη &#34;Έσοδα&#34; από την υψηλότερη προς τη χαμηλότερη.
```powerquery
Table.AddRankColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Revenue = 200],
        [CustomerID = 2, Name = "Jim", Revenue = 100],
        [CustomerID = 3, Name = "Paul", Revenue = 200],
        [CustomerID = 4, Name = "Ringo", Revenue = 50]
    }),
    "RevenueRank",
    {"Revenue", Order.Descending},
    [RankKind = RankKind.Competition]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Revenue = 200, RevenueRank = 1],
    [CustomerID = 3, Name = "Paul", Revenue = 200, RevenueRank = 1],
    [CustomerID = 2, Name = "Jim", Revenue = 100, RevenueRank = 3],
    [CustomerID = 4, Name = "Ringo", Revenue = 50, RevenueRank = 4]
})
```




## Category
Table.Ordering
