---
title: Table.Distinct
---

# Table.Distinct


## Description

Removes duplicate rows from the table.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Removes duplicate rows from the table.    An optional parameter, <code>equationCriteria</code>, specifies which columns of the table are tested for duplication. If <code>equationCriteria</code> is not specified, all columns are tested.<br />    <br />    Because Power Query sometimes offloads certain operations to backend data sources (known as "folding"), and also sometimes optimizes queries by     skipping operations that aren't strictly necessary, in general there's no guarantee which specific duplicate will be preserved.    For example, you can't assume that the first row with a unique set of column values will remain, and rows further down in the table will be removed.    If you want the duplicate removal to behave predictably, first buffer the table using <code>Table.Buffer</code>.


## Examples

### Example #1 
Remove the duplicate rows from the table.
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
Remove the duplicate rows from column [b] in the table &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
