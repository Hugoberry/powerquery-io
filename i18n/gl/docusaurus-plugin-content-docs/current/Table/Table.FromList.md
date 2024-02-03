---
title: Table.FromList
---

# Table.FromList


## Description

Converte unha lista nunha táboa aplicando a función de división especificada para cada elemento da lista.


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


## Details

Converte unha lista, <code>list</code>, nunha táboa aplicando a función de división opcional, <code>splitter</code>, para cada elemento da lista. Por defecto, a lista asúmese como unha lista de valores de texto dividida por comas. O <code>columns</code> opcional pode ser o número de columnas, unha lista de columnas ou un TableType. Tamén se poden especificar os opcionais <code>default</code> e <code>extraValues</code>.


## Examples

### Example #1 
Cree unha táboa a partir dunha lista co divisor predefinido.
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
Cree unha táboa a partir dunha lista co divisor personalizado.
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
Cree unha táboa a partir dunha lista co divisor Record.FieldValues.
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
