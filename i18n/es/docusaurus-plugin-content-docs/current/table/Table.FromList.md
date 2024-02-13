---
title: Table.FromList
---

# Table.FromList


Convierte una lista en una tabla aplicando la función de división especificada a cada elemento de la lista.


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

Convierte una lista <code>list</code> en una tabla aplicando la función de división opcional, <code>splitter</code>, a cada elemento de la lista. De forma predeterminada, se supone que se trata de una lista de valores de texto separados por comas. <code>columns</code> opcional puede ser el número de columnas, una lista de columna o un tipo de tabla. También puede especificarse un parámetro opcional <code>default</code> y <code>extraValues</code>.


## Examples

### Example #1 
Cree una tabla a partir de una lista utilizando el divisor por defecto.
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
Cree una tabla a partir de una lista utilizando un divisor personalizado.
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
Cree una tabla a partir de la lista utilizando el divisor Record.FieldValues.
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
