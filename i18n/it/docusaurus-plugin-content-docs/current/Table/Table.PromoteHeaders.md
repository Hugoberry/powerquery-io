---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Alza di livello la prima riga di valori come nuove intestazioni di colonna (nomi di colonna).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Alza di livello la prima riga di valori come nuove intestazioni di colonna (nomi di colonna). Per impostazione predefinita, solo i valori di testo o numerici vengono alzati di livello a intestazioni. Opzioni valide:    <div>      <code>PromoteAllScalars</code>: se è impostata su <code>true</code>, tutti i valori scalari nella prima riga vengono alzati di livello a intestazioni in base alle impostazioni cultura definite in <code>Culture</code>, se specificate, o alle impostazioni locali correnti del documento.    Per i valori che non possono essere convertiti in testo, verrà usato un nome di colonna predefinito.    </div>    <div>    <code>Culture</code>: nome che specifica le impostazioni cultura per i dati.    </div>  


## Examples

### Example #1 
Alzare di livello la prima riga di valori nella tabella.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Consente di alzare di livello tutti i valori scalari nella prima riga a intestazioni.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
