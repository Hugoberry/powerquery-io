---
title: Table.FromList
---

# Table.FromList


Converte uma lista em tabela aplicando a função de divisão especificada a cada item da lista.


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

Converte uma lista, <code>list</code>, em tabela aplicando a função de divisão opcional, <code>splitter</code>, a cada item da lista. Por padrão, a lista é considerada uma lista de valores de texto divididos por vírgula. O <code>columns</code> opcional pode ser o número de colunas, uma lista de colunas ou um TableType. <code>default</code> e <code>extraValues</code> opcionais também podem ser especificados.


## Examples

### Example #1 
Crie uma tabela a partir de uma lista usando o divisor padrão.
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
Crie uma tabela a partir de uma lista usando um divisor personalizado.
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
Crie uma tabela da lista usando o divisor Record.FieldValues.
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
