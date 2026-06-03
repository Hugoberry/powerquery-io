---
title: Table.Distinct
---

# Table.Distinct


Tar bort dubblettrader i tabellen.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Tar bort dubblettrader från tabellen. En valfri parameter, `equationCriteria`, anger vilka kolumner i tabellen som testas för duplicering. Om `equationCriteria` inte anges testas alla kolumner.  
  
Eftersom Power Query ibland avlastar vissa åtgärder till serverdelsdatakällor (kallas "vikning") och även ibland optimerar frågor genom att hoppa över åtgärder som inte är absolut nödvändiga, i allmänhet finns det ingen garanti för vilken specifik dubblett som ska bevaras. Du kan till exempel inte förutsätta att den första raden med en unik uppsättning kolumnvärden finns kvar och att rader längre ned i tabellen tas bort. Om du vill att dubblettborttagningen ska fungera förutsägbart buffrar du först tabellen med `Table.Buffer`.


## Examples

### Example #1
Ta bort dubblettraderna från tabellen.
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
Ta bort dubblettraderna från kolumnen \[b\] i tabellen `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
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
