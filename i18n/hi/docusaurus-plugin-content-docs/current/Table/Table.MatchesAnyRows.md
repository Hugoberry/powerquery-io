---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

इंगित करता है कि क्या तालिका की कोई भी पंक्ति दी गई शर्त को पूरा करती है.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

इंगित करता है कि क्या <code>table</code> की कोई भी पंक्ति दिए गए <code>condition</code> से मेल खाती है. किसी भी पंक्ति के मेल खाने पर <code>true</code> अन्यथा <code>false</code> लौटाता है.


## Examples

### Example #1 
निर्धारित करें कि क्या तालिका &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; में स्तंभ [a] का कोई भी पंक्ति मान सम है.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
निर्धारित करें कि क्या तालिका &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; में कोई भी पंक्ति मान [a = 1, b = 2] हैं.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
