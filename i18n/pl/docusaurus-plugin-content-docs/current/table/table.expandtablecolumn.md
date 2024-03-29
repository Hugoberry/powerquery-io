---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Rozwija kolumnę rekordów lub kolumnę tabel na wiele kolumn w tabeli zawierającej.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Rozwija tabele w kolumnie <code>table</code>[<code>column</code>] na wiele wierszy i kolumn. Parametr <code>columnNames</code> służy do wybierania kolumn z tabeli wewnętrznej, które zostaną rozwinięte. Określając parametr <code>newColumnNames</code>, można uniknąć konfliktów między nazwami istniejących i nowych kolumn.


## Examples

### Example #1 
Rozwiń kolumny tabel znajdujące się w kolumnie &lt;code&gt;[a]&lt;/code&gt; tabeli &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; na 3 kolumny: &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; i &lt;code&gt;[t.c]&lt;/code&gt;.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
