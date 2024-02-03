---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Tablodaki satırın konum veya konumlarını döndürür.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Details

Belirtilen <code>table</code> öğesinde <code>row</code> öğesinin ilk oluşumuna ait satır konumunu döndürür. Hiçbir oluşum bulunmadıysa -1 döndürülür.    <ul>       <li><code>table</code>: Girdi tablosu.</li>       <li><code>row</code>: Tabloda konumun bulunacağı satır.</li>       <li><code>occurrence</code>: <i>[Optional]</i> Satırın hangi oluşumlarının döndürüleceğini belirtir.</li>       <li><code>equationCriteria</code>: <i>[Optional]</i> Tablo satırları arasındaki karşılaştırmayı denetler.</li>    </ul>    


## Examples

### Example #1 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; tablosunda [a = 2, b = 4] değerlerinin ilk oluşum konumunu bulur.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; tablosunda [a = 2, b = 4] değerlerinin ikinci oluşum konumunu bulur.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; tablosunda [a = 2, b = 4] değerlerinin tüm oluşumlarının konumunu bulur.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
