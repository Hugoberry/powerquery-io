---
title: Table.Distinct
---

# Table.Distinct


Elimina filas duplicadas da táboa.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Elimina as filas duplicadas da táboa. Un parámetro opcional, `equationCriteria`, especifica que columnas da táboa se proban para detectar duplicación. Se non se especifica `equationCriteria`, pódense comprobar todas as columnas.  
​  
Dado que Power Query ás veces descarga certas operacións ás fontes de datos do backend (o que se coñece como "pregamento") e ás veces tamén optimiza as consultas mediante omitindo operacións que non son estritamente necesarias, en xeral non hai garantía de que duplicado específico se conservará. Por exemplo, non se pode asumir que a primeira fila cun conxunto único de valores de columna permanecerá e que as filas máis abaixo na táboa serán eliminadas. Se queres que a eliminación de duplicados se comporte de xeito predicible, primeiro almacena a táboa no búfer usando `Table.Buffer`.


## Examples

### Example #1
Eliminar as filas duplicadas da táboa.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
Eliminar as filas duplicadas da columna \[b\] na táboa `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
