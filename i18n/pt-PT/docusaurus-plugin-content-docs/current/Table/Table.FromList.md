---
title: Table.FromList
---

# Table.FromList


## Description

Converte uma lista numa tabela aplicando a função de divisor especificada a cada item existente na lista.


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

Converte uma lista, <code>list</code>, numa tabela aplicando a função de divisor opcional, <code>splitter</code>, a cada item existente na lista. Por predefinição, parte-se do princípio de que a lista é uma lista de valores de texto separados por vírgulas. O <code>columns</code> opcional pode ser o número de colunas, uma lista de colunas ou um TableType. Também é possível especificar um <code>default</code> e <code>extraValues</code> opcional.


## Examples

### Example #1 
Crie uma tabela a partir de uma lista com o divisor predefinido.
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
Criar uma tabela a partir de uma lista ao utilizar um divisor personalizado.
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
Crie uma tabela a partir da lista com o divisor Record.FieldValues.
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
