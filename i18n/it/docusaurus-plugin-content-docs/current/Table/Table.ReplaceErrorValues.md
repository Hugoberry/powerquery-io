---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Sostituisce i valori di errore nelle colonne specificate con il valore corrispondente specificato.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Sostituisce i valori di errore nelle colonne specificate di <code>table</code> con i nuovi valori nell'elenco <code>errorReplacement</code>. Il formato dell'elenco è \{\{column1, value1}, …}. È consentito un solo valore di sostituzione per colonna. Se si specifica la colonna più di una volta, verrà generato un errore.


## Examples

### Example #1 
Sostituire il valore di errore con il testo &#34;world&#34; nella tabella.
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
Sostituire il valore di errore nella colonna A con il testo &#34;hello&#34; e nella colonna B con il testo &#34;world&#34; nella tabella.
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
