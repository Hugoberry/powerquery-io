---
title: Table.Max
---

# Table.Max


## Description

Pateikiama didžiausia eilutė arba numatytoji reikšmė naudojant nurodytus kriterijus.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Pateikiama didžiausia <code>table</code> eilutė pagal nurodytus <code>comparisonCriteria</code>. Jei lentelė tuščia, pateikiama pasirenkama <code>default</code> reikšmė. 


## Examples

### Example #1 
Raskite didžiausią reikšmę turinčią stulpelio [a] eilutę lentelėje &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2 
Raskite didžiausią reikšmę turinčią stulpelio [a] eilutę lentelėje &lt;code&gt;(\{})&lt;/code&gt;. Jei tuščia, pateikiama -1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
