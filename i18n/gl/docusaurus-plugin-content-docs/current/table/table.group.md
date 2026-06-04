---
title: Table.Group
---

# Table.Group


Agrupa filas na táboa que teñen a mesma clave.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Agrupa as filas de `table` segundo as columnas de clave que define `key`. O `key` pode ser só o nome dunha columna ou unha lista de nomes de columnas. Para cada grupo, xérase un rexistro que contén as columnas de clave (e os seus valores), xunto coas columnas agregadas que especifica `aggregatedColumns`. De maneira opcional, poden especificarse `groupKind` e `comparer`.  
  
Se os datos xa están ordenados segundo as columnas de clave, pode fornecerse un `groupKind` de GroupKind.Local. Isto pode mellorar o desempeño do agrupamento en determinados casos, dado que se asume que todas as columnas cun conxunto de valores de clave determinado son contiguos.  
  
Cando se pasa un `comparer`, cómpre sinalar que se trata claves diverxentes como iguais, unha fila pode colocarse nun grupo cuxas claves diverxan das súas.  
  
Esta función non garante que volva a orde das columnas.


## Examples

### Example #1
Agrupar a táboa engadindo unha columna agregada \[total\] que contén a suma de prezos ("each List.Sum(\[price\])").
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
