---
title: Table.Distinct
---

# Table.Distinct


## Description

从表中删除重复的行。


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

从表中删除重复的行。    可选参数 <code>equationCriteria</code> 指定对表的哪些列进行重复测试。如果未指定 <code>equationCriteria</code>，则将测试所有列。<br />    <br />    因为 Power Query 有时会将某些操作卸载到后端数据源(称为“折叠”)，并且有时还会通过    跳过并非绝对需要的操作来优化查询，所以通常无法保证将保留哪些特定重复项。    例如，不能假定将会保留具有一组唯一列值的第一行，并将删除表中更靠下的行。    如果希望删除重复项的行为可以预测，请首先使用 <code>Table.Buffer</code> 缓冲该表。


## Examples

### Example #1 
从表中删除重复的行。
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
从表 &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt; 的列 [b] 中删除重复的行。
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
