---
title: Table.Partition
---

# Table.Partition


Particiona a táboa nunha lista de táboas baseándose no número especificado de grupos e columnas.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Particiona a `table` nunha lista de `groups` números de táboas, baseándose no valor de `column` e da función `hash`. A función `hash` aplícase ao valor da fila `column` para obter un valor hash para a fila. O módulo do valor hash `groups` determina en cal das táboas devoltas se vai colocar a fila.

-   `table`: a táboa que se vai particionar.
-   `column`: a columna de hash que vai determinar en que táboa devolta está a fila.
-   `groups`: o número de táboas no que se vai particionar a táboa de entrada.
-   `hash`: a función aplicada para obter un valor hash.


## Examples

### Example #1
Particionar a táboa `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` en 2 táboas na columna \[a\], usando o valor das columnas como a función hash.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
