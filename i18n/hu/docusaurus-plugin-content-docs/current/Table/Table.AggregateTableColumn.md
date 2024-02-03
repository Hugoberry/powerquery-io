---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Összesíti a táblák oszlopát több oszlopba az azokat tartalmazó táblában.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Összesíti a(z) <code>table</code>[<code>column</code>] tábláit a táblák összesített értékeit tartalmazó több oszlopba. A(z) <code>aggregations</code> használatával adhatók meg az összesítendő táblákat tartalmazó oszlopok, a táblákra alkalmazandó aggregátumfüggvények, amelyek előállítják a táblák értékeit, valamint a létrehozni kívánt összesítő oszlopok neve.


## Examples

### Example #1 
Összesített táblaoszlopok a következőben: &lt;code&gt;[t]&lt;/code&gt; a(z) &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; táblában a(z) &lt;code&gt;[t.a]&lt;/code&gt; összegében, a(z) &lt;code&gt;[t.b]&lt;/code&gt; minimuma és maximuma és a(z) &lt;code&gt;[t.a]&lt;/code&gt; értékeinek száma.
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
