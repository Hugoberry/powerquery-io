---
title: Table.FromRecords
---

# Table.FromRecords


Converte unha lista de rexistros nunha táboa.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Converte unha lista especificada de rexistros nunha táboa.

-   `records` : A lista de rexistros para converter nunha táboa.
-   `columns` : (Opcional) Unha lista dos nomes das columnas da táboa ou o tipo da táboa.
-   `missingField` : (Opcional) Especifica como xestionar os campos que faltan nunha fila. Emprega un dos seguintes valores:
    -   `MissingField.Error`: Calquera campo que falte produce un erro (predeterminado).
    -   `MissingField.UseNull`: Os campos que faltan inclúense como valores `null`.
      
    Empregar `MissingField.Ignore` neste parámetro produce un erro.


## Examples

### Example #1
Crear unha táboa a partir dos rexistros, usando os nomes dos campos do rexistro como nomes de columna.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Crear unha táboa a partir dos rexistros con tipos de columnas e seleccionar o número de columnas.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Cree unha táboa que conteña o nome, a inicial do medio e o apelido dos clientes a partir dos rexistros especificados. Se falta algún dos valores, substitúa o valor por `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
