---
title: Table.FromList
---

# Table.FromList


Converte un elenco in una tabella applicando la funzione di divisione specificata a ogni elemento dell&#39;elenco.


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Remarks

Converte l'elenco <code>list</code> in una tabella applicando la funzione di divisione facoltativa <code>splitter</code> a ogni elemento dell'elenco. Per impostazione predefinita, si presuppone che l'elenco sia un elenco di valori di testo suddiviso da virgole. <code>columns</code> facoltativo può essere il numero di colonne, un elenco di colonne o TableType. Facoltativamente, è possibile specificare anche <code>default</code> e <code>extraValues</code>.


## Examples

### Example #1 
Creare una tabella da un elenco usando la barra di divisione predefinita.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    null,
    {"Letter", "Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Letter = "a", #"Example Word" = "apple"],
    [Letter = "b", #"Example Word" = "ball"],
    [Letter = "c", #"Example Word" = "cookie"],
    [Letter = "d", #"Example Word" = "door"]
})
```


### Example #2 
Crea una tabella da un elenco usando una barra di divisione personalizzata.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    Splitter.SplitByNothing(),
    {"Letter and Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [#"Letter and Example Word" = "a,apple"],
    [#"Letter and Example Word" = "b,ball"],
    [#"Letter and Example Word" = "c,cookie"],
    [#"Letter and Example Word" = "d,door"]
})
```


### Example #3 
Creare una tabella dall&#39;elenco usando la barra di divisione Record.FieldValues.
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
