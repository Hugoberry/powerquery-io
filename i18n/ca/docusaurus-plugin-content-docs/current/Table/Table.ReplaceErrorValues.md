---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Substitueix els valors erronis de les columnes especificades amb el valor especificat corresponent.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Substitueix els valors erronis de les columnes especificades de <code>table</code> amb els valors nous de la llista <code>errorReplacement</code>. El format de la llista és \{\{column1, value1}, …}. És possible que només hi hagi un valor de substitució per columna, si especifiqueu la columna més d'una vegada, es produirà un error.


## Examples

### Example #1 
Substituïu el valor erroni amb el text &#34;world&#34; a la taula.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2 
Substitueix el valor erroni de la columna A amb el text &#34;hello&#34; i la columna B amb el text &#34;world&#34; de la taula.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
