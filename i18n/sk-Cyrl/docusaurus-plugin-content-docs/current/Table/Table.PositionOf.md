---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Vráti pozíciu alebo pozície riadka v rámci tabuľky.


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

Vráti pozíciu riadka prvého výskytu hodnoty <code>row</code> v zadanej tabuľke <code>table</code>. Ak sa nenájdu žiadne výskyty, vráti hodnotu –1.    <ul>       <li><code>table</code>: Vstupná tabuľka.</li>       <li><code>row</code>: Riadok v tabuľke, ktorého pozícia sa má nájsť.</li>       <li><code>occurrence</code>: <i>[Voliteľné]</i> Udáva, ktoré výskyty riadka sa majú vrátiť.</li>       <li><code>equationCriteria</code>: <i>[Voliteľné]</i> Kontroluje porovnanie medzi riadkami tabuľky.</li>    </ul>    


## Examples

### Example #1 
Nájdite pozíciu prvého výskytu záznamu [a = 2, b = 4] v tabuľke &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Nájdite pozíciu druhého výskytu záznamu [a = 2, b = 4] v tabuľke &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Nájdite pozíciu všetkých výskytov záznamu [a = 2, b = 4] v tabuľke &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
