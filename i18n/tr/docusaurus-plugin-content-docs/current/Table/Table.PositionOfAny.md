---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Tablodaki belirtilen satırlardan herhangi birinin konum veya konumlarını döndürür.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

<code>rows</code> listesinin ilk oluşumuna ait <code>table</code> öğesinden satır konumlarını döndürür. Hiçbir oluşum bulunmadıysa -1 döndürülür.    <ul>    <li><code>table</code>: Girdi tablosu.</li>       <li><code>rows</code>:  Tabloda konumların bulunacağı satır listesi.</li>       <li><code>occurrence</code>: <i>[Optional]</i> Satırın hangi oluşumlarının döndürüleceğini belirtir.</li>       <li><code>equationCriteria</code>: <i>[Optional]</i> Tablo satırları arasındaki karşılaştırmayı denetler.</li>    </ul>    


## Examples

### Example #1 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; tablosunda [a = 2, b = 4] veya [a = 6, b = 8] değerlerinin ilk oluşum konumunu bulur.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt; tablosunda [a = 2, b = 4] veya [a = 6, b = 8] değerlerinin tüm oluşumlarının konumunu bulur.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
