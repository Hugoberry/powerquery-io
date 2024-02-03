---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Menunjukkan sama ada sebarang rekod yang ditentukan muncul sebagai baris dalam jadual.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Menunjukkan sama ada sebarang rekod yang ditentukan dalam senarai rekod <code>rows</code>, muncul sebagai baris dalam <code>table</code>.    Parameter pilihan <code>equationCriteria</code>, mungkin ditentukan untuk mengawal perbandingan antara baris pada jadual.


## Examples

### Example #1 
Tentukan sama ada jadual &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; mengandungi baris &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; atau &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Tentukan sama ada jadual &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; mengandungi baris &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; atau &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Tentukan sama ada jadual &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; mengandungi baris &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; atau &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; dengan membandingkan lajur sahaja [a].
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
