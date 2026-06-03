---
title: Table.SplitColumn
---

# Table.SplitColumn


Divide a coluna especificada num conjunto de colunas adicionais utilizando a função de divisor especificada.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

Divide a coluna especificada num conjunto de colunas adicionais através da função de divisor especificada.

-   `table`: a tabela que contém a coluna a dividir.
-   `sourceColumn`: o nome da coluna a dividir.
-   `splitter`: a função de divisor utilizada para dividir a coluna (por exemplo, `Splitter.SplitTextByDelimiter` ou `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: uma lista de nomes de novas colunas a criar ou o número de novas colunas.
-   `default`: substitui o valor utilizado quando não existem valores divididos suficientes para preencher todas as novas colunas. O valor predefinido para este parâmetro é `null`.
-   `extraColumns`: especifica o que fazer se puder haver mais valores divididos do que o número de novas colunas. É possível transmitir um valor de enumeração `ExtraValues.Type` para este parâmetro. O valor predefinido é `ExtraValues.Ignore`.


## Examples

### Example #1
Dividir a coluna de nome em nome próprio e apelido.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
Dividir a coluna de nome em nome próprio e apelido e, em seguida, renomear as novas colunas.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
Dividir a coluna de nome em nome próprio e apelido, renomear as novas colunas e preencher os espaços em branco com "-Sem Entrada-".
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
Dividir a coluna de nome em nome próprio e apelido e, em seguida, renomear as novas colunas. Como podem existir mais valores do que o número de colunas disponíveis, torne a coluna de apelido numa lista que inclua todos os valores após o nome próprio.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
