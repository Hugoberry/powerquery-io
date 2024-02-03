---
title: Table.Distinct
---

# Table.Distinct


## Description

Quita las filas duplicadas de la tabla.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Quita las filas duplicadas de la tabla.    Un parámetro opcional, <code>equationCriteria</code>, especifica qué columnas de la tabla se prueban para la duplicación. Si no se especifica <code>equationCriteria</code>, se prueban todas las columnas.<br />    <br />    Dado que, a veces, Power Query descarga determinadas operaciones en orígenes de datos de back-end (conocidas como "plegamiento") y, a veces, optimiza las consultas mediante     la omisión de operaciones que no son estrictamente necesarias; en general, no hay ninguna garantía de que se conserve un duplicado específico.    Por ejemplo, no puede asumir que la primera fila con un conjunto único de valores de columna permanecerá y que se quitarán las filas más abajo de la tabla.    Si desea que la eliminación de duplicados se comporte de forma predecible, primero es necesario almacenar en búfer la tabla con <code>Table.Buffer</code>.


## Examples

### Example #1 
Quitar las filas duplicadas de la tabla.
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
Quitar las filas duplicadas de la columna [b] de la tabla &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
