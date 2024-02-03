---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

इंगित करता है कि क्या तालिका की सभी पंक्तियाँ दी गई शर्त को पूरा करती हैं.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

इंगित करता है कि क्या <code>table</code> की सभी पंक्तियाँ दिए गए/दी गई <code>condition</code> को पूरा करती हैं. अगर सभी पंक्तियाँ मेल खाती हैं, तो <code>true</code> अन्यथा <code>false</code> लौटाता है.


## Examples

### Example #1 
निर्धारित करें कि क्या तालिका [a] के सभी पंक्ति मान सम हैं.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2 
पता करें कि क्या तालिका &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; में सभी पंक्ति मान [a = 1, b = 2] हैं.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
