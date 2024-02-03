---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Crea una tabella da un elenco di colonne e valori specificati.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Crea una tabella di tipo <code>columns</code> da un elenco <code>lists</code> che contiene elenchi annidati con nomi di colonna e valori.    Se alcune colonne contengono più valori di altre, i valori mancanti verranno riempiti con il valore predefinito 'null', se le colonne ammettono i valori Null.


## Examples

### Example #1 
Restituire una tabella da un elenco di nomi di clienti in un elenco. Ogni valore nell&#39;elemento elenco clienti diventa un valore di riga e ogni elenco diventa una colonna.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Creare una tabella da un elenco di colonne specificato e un elenco di nomi di colonna.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Creare una tabella con un numero diverso di colonne per riga. Il valore di riga mancante è Null.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
