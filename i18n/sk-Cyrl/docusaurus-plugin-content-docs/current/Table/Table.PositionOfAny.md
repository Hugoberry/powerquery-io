---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Vráti pozíciu alebo pozície niektorého zo zadaných riadkov v rámci tabuľky.


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

Vráti pozície riadkov z pozície <code>table</code> prvého výskytu zoznamu hodnôt <code>rows</code>. Ak sa nenájdu žiadne výskyty, vráti hodnotu –1.    <ul>    <li><code>table</code>: Vstupná tabuľka.</li>       <li><code>rows</code>: Zoznam riadkov v tabuľke, ktorých pozície sa majú nájsť.</li>       <li><code>occurrence</code>: <i>[Voliteľné]</i> Udáva, ktoré výskyty riadka sa majú vrátiť.</li>       <li><code>equationCriteria</code>: <i>[Voliteľné]</i> Kontroluje porovnanie medzi riadkami tabuľky.</li>    </ul>    


## Examples

### Example #1 
Nájdite pozíciu prvého výskytu záznamu [a = 2, b = 4] alebo [a = 6, b = 8] v tabuľke &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Nájdite pozíciu všetkých výskytov záznamu [a = 2, b = 4] alebo [a = 6, b = 8] v tabuľke &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
