---
title: Table.FromRows
---

# Table.FromRows


Crea una tabella da un elenco di valori di riga e colonne facoltative


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Crea una tabella dall'elenco <code>rows</code> in cui ogni elemento dell'elenco è un elenco interno contenente i valori di colonna per una singola riga. È possibile fornire un elenco facoltativo di nomi di colonna, un tipo di tabella o un numero di colonne come secondo argomento per <code>columns</code>.


## Examples

### Example #1 
Restituire una tabella con la colonna [CustomerID] con i valori \{1, 2}, la colonna [Name] con i valori \{&#34;Bob&#34;, &#34;Jim&#34;} e la colonna [Phone] con i valori \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Restituire una tabella con la colonna [CustomerID] con i valori \{1, 2}, la colonna [Name] con i valori \{&#34;Bob&#34;, &#34;Jim&#34;} e la colonna [Phone] con i valori \{&#34;123-4567&#34;, &#34;987-6543&#34;}, dove [CustomerID] è di tipo numerico e [Name] e [Phone] sono di tipo testo.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
