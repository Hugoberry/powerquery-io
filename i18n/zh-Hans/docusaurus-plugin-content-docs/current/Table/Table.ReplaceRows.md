---
title: Table.ReplaceRows
---

# Table.ReplaceRows


使用提供的行替换指定范围内的行。


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

在输入 <code>table</code> 中使用指定的 <code>rows</code>，从 <code>offset</code> 之后开始替换指定的行数 <code>count</code>。<code>rows</code> 参数是记录列表。    <ul>       <li><code>table</code>: 要在其中执行替换的表。</li>       <li><code>offset</code>: 在进行替换之前要跳过的行数。</li>       <li><code>count</code>: 要替换的行数。</li>       <li><code>rows</code>: 要在由 <code>offset</code> 指定的位置插入到 <code>table</code> 中的行记录的列表。</li>    </ul>


## Examples

### Example #1 
从位置 1 开始，替换 3 行。
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
